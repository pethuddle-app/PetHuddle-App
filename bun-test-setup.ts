import { plugin } from 'bun';

plugin({
  name: 'image-loader',
  setup(build) {
    build.onLoad({ filter: /\.(png|jpg|jpeg|webp|gif|svg)$/ }, () => {
      return {
        exports: { default: 1 },
        loader: 'object',
      };
    });
  },
});
