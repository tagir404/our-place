import vituum from 'vituum'
import liquid from '@vituum/vite-plugin-liquid'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default {
    base: 'our-place',
    plugins: [
        vituum(),
        liquid({
            root: './src/components'
        }),
        ViteImageOptimizer({
            jpg: {
                quality: 80
            }
        })
    ]
}
