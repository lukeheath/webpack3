module.exports = {
  "extends": "google",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "rules": {
    "comma-dangle": 0,
    "curly": 0,
    "indent": [2, 2, {
      "VariableDeclarator": 2
    }],
    "max-len": 0,
    "no-undef": 0,
    "object-curly-spacing": [2, "always"],
    "one-var": 0,
    "padded-blocks": 0,
    "quotes": [2, "single", "avoid-escape"]
  }
};