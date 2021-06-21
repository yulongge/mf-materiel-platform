# 物料平台
> 项目： 物料平台

### 1. 安装及运行

```sh
# 安装

npm install
# or
yarn install

# 运行
npm run dev

# 预览
npm run preview

# 打包
npm run build
```

### 2. 规范
> 代码规范，提交规范 。。。
#### 2.1 代码规范

代码风格约束

- `eslint`：代码质量检测（用var还是let，用==还是===...）
- `prettier`：代码风格检测（加不加尾逗号，单引号还是双引号...）
- `eslint-config-prettier`：解决ESLint与Prettier的风格冲突
- `eslint-plugin-prettier`：ESLint的插件，集成Prettier的功能
- `eslint-plugin-vue`：ESLint的插件，增加Vue的检测能力

```sh
npm i eslint prettier eslint-config-prettier eslint-config-standard eslint-plugin-prettier eslint-plugin-import eslint-plugin-vue eslint-plugin-node eslint-plugin-promise eslint-plugin-standard  @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser -D
```

IDE环境约束

`.editorconfig`

#### 2.2 提交规范

husky：触发Git Hooks,执行脚本
lint-staged：检测文件，只对暂存区中有改动的文件进行检测，可以在提交前进行Lint操作
commitizen：使用规范化的message提交
commitlint: 检查message是否符合规范
cz-conventional-changelog：适配器。提供conventional-changelog标准（约定式提交标准）。基于不同需求，也可以使用不同适配器（比如: cz-customizable）。

```sh
npm i husky lint-staged commitizen @commitlint/config-conventional @commitlint/cli  -D

```
### 技术栈
