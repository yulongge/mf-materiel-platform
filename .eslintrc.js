module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'standard',
    'prettier',
    'plugin:prettier/recommended'
  ],
  rules: {
    'vue/no-unused-components': 'off',
    'vue/no-unused-vars': 'off',
    'vue/no-v-for-template-key-on-child': 'off',
    'vue/custom-event-name-casing': 'off',
    // 'vue/attributes-order': 'off',
    'vue/one-component-per-file': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attribute-hyphenation': 'off',
    'space-before-function-paren': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ],
    'no-var': 2, // 禁止使用var
    'no-with': 2, // 禁用with
    'no-eq-null': 2, // 禁止对null使用==或!=运算符
    'no-eval': 1, // 禁止使用eval
    'no-alert': 2, // 禁止使用alert confirm prompt
    'no-div-regex': 1, // 不能使用看起来像除法的正则表达式/=foo/
    'no-empty-function': 2, // 禁止出现空函数
    'no-array-constructor': 2, // 禁止使用数组构造器
    'no-implied-eval': 2, // 禁止使用隐式eval
    'no-multiple-empty-lines': 2, // 禁止出现多行空行
    'comma-spacing': [2, { before: false, after: true }], // 逗号间距
    'no-extra-parens': [2, 'functions'], // 仅在函数表达式附近禁止不必要的括号
    'no-console': process.env.NODE_ENV === 'production' ? 1 : 0, // 禁用 console
    'no-debugger': process.env.NODE_ENV === 'production' ? 1 : 0, // 生产环境禁止使用debug模式
    'array-bracket-spacing': [2, 'never'], // 强制数组方括号中使用一致的空格
    'no-dupe-keys': 2, // 在创建对象字面量时不允许键重复 {a:1,a:1}
    'no-dupe-args': 2, // 函数参数不能重复
    'no-duplicate-case': 2, // switch中的case标签不能重复
    'eqeqeq': 2, // 必须使用全等
    'no-fallthrough': 1, // 禁止switch穿透
    'no-extra-label': 2, // 禁用不必要的标签
    'no-invalid-regexp': 2, // 禁止无效的正则表达式
    'no-invalid-this': 2, // 禁止无效的this，只能用在构造器，类，对象字面量
    'no-irregular-whitespace': 2, // 不能有不规则的空格
    'no-iterator': 2, // 禁止使用__iterator__ 属性
    'no-label-var': 2, // label名不能与var声明的变量名相同
    'no-labels': 2, // 禁止标签声明
    'no-lone-blocks': 2, // 禁止不必要的嵌套块
    'no-mixed-spaces-and-tabs': [2, false], // 禁止混用tab和空格
    'no-multi-spaces': 1, // 不能用多余的空格
    'no-multi-str': 2, // 字符串不能用\换行
    'no-new-func': 1, // 禁止使用new Function
    'no-new-object': 2, // 禁止使用new Object()
    'no-new-require': 2, // 禁止使用new require
    'no-redeclare': 2, // 禁止重复声明变量
    'no-unreachable': 2, // 不能有无法执行的代码
    'no-unused-expressions': 2, // 禁止无用的表达式
    'no-unused-vars': [2, { vars: 'all', args: 'after-used' }], // 不能有声明后未被使用的变量或参数
    'prefer-const': 0, // 首选const
    'id-match': 0, // 命名检测
    'no-sparse-arrays': 2, // 禁止稀疏数组， [1,,2]
    'no-spaced-func': 2, // 函数调用时 函数名与()之间不能有空格
    'no-useless-return': 2, // 禁止多余的 return 语句
    'no-nested-ternary': 2, // 禁止使用嵌套的三目运算
    'spaced-comment': [
      2,
      'always',
      { markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ','] }
    ] // 注释开始后，此规则将强制间距的一致性//或/*
  }
};
