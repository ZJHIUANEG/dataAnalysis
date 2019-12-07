const path = require("path");

const VueLoaderPlugin = require("vue-loader/lib/plugin");

// 导入在内存中生成的 HTML 页面的插件
const htmlWebpackPlugin = require("html-webpack-plugin");

// 这个配置文件就是一个js文件，通过 node 中的模块操作，向外暴露一个配置对象
module.exports = {
  // 在配置文件中，需要手动绑定指定 入口 和 出口
  entry: path.join(__dirname, "./src/main.js"),
  output: {
    // 输出文件相关的配置
    // 指定打包好的文件，输出到哪个目录中去
    path: path.join(__dirname, "./dist"),
    filename: "bundle.js" // 这是绑定输出文件的名称
  },
  plugins: [
    // 只要是插件都一定要放到 plugins 节点中去
    new htmlWebpackPlugin({
      // 创建一个 在内存中生成 HTML 页面插件
      template: path.join(__dirname, "./src/index.html"), // 指定模板页面，将来根据指定页面路径，去生成内存中的页面
      filename: "index.html" // 指定生成的页面的名称
    }),
    new VueLoaderPlugin()
  ],
  module: {
    // 这个节点，用于配置所有第三方模块 加载器
    rules: [
      // 所有第三方模块的 配置规则
      { test: /\.css$/, use: ["style-loader", "css-loader"] }, // 配置处理 .css 文件的第三方loader规则
      // { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] }, // 配置处理 .less 文件的第三方loader规则
      // { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] }, // 配置处理 .scss 文件的第三方loader规则
      //‘?’ 后传参，limit 给定的值，是图片的大小，单位是 byte，如果我们引用的图片，大于或等于给定的limit值，则不会转为base64格式的字符串，如果图片小于给定的limit值，则会被转为base64的字符串
      { test: /\.(jpg|png|gif|bmp|jpeg|svg)$/, use: "url-loader" }, // 配置处理图片路径的 loader
      { test: /\.(ttf|eot|svg|woff|woff2)$/, use: "url-loader" }, // 配置处理字体文件的 loader
      { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ }, // 配置babel来转换高级的ES语法
      { test: /\.vue$/, use: ["vue-loader"] }, // 处理 .vue 文件的加载器
      { test: /\.txt$/, use: "raw-loader" },
      {
        test: /\.json$/,
        use: "json-loader"
      }
    ]
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.js"
    }
  },
  mode: "development"
};
