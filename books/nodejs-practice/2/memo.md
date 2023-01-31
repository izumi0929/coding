## JavaScript の話

- JSON と Object は似て非なる
- Object はプロパティに関数を持てるが、json は持てない

```
const obj = {
  foo: () => console.log('aaa'),
  bar: 'bar'
}

// fooプロパティはJSONに変換できず消える
const str = JSON.stringify(obj) // '{"bar": "bar"}'
```

for 文は ES2015 以降は`for...of`を使うと良いでしょう
