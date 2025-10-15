import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
    plugins: [
        react(),
        // 번들 분석 - pnpm build 후 stats.html 생성
        visualizer({
            open: true,
            filename: 'dist/stats.html',
            gzipSize: true,
            brotliSize: true,
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    build: {
        // 소스맵 생성 (디버깅용, production에서는 'hidden'이나 false 권장)
        sourcemap: true,

        // 청크 크기 경고 임계값 (KB)
        chunkSizeWarningLimit: 500,

        rollupOptions: {
            output: {
                // Manual Chunk Strategy - 번들 분리 전략
                manualChunks: (id) => {
                    // node_modules의 라이브러리들을 vendor로 분리
                    if (id.includes('node_modules')) {
                        // React 관련은 따로 분리 (자주 변경되지 않아 캐싱 유리)
                        if (id.includes('react') || id.includes('react-dom')) {
                            return 'vendor-react';
                        }
                        // React Router 분리
                        if (id.includes('react-router')) {
                            return 'vendor-router';
                        }
                        // 나머지 외부 라이브러리
                        return 'vendor';
                    }
                },

                // 파일명에 해시 추가 (캐싱 전략)
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',
                assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
            }
        },

        // CSS 코드 스플리팅
        cssCodeSplit: true,

        // 최소화 설정
        minify: 'esbuild', // 'terser'도 가능하지만 esbuild가 더 빠름

        // 대용량 청크 경고 비활성화 옵션 (필요시)
        // chunkSizeWarningLimit: 1000,
    },

    // 최적화 설정
    optimizeDeps: {
        // 사전 번들링할 의존성
        include: ['react', 'react-dom', 'react-router-dom'],
    }
});
