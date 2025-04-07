import vituum from 'vituum'
import liquid from '@vituum/vite-plugin-liquid'

export default {
    base: 'our-place',
    plugins: [
        vituum(),
        liquid({
            root: './src/components'
        })
    ]
}
