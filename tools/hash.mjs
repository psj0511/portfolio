// 사용: node tools/hash.mjs <기업키> <토큰6자>
// 출력된 해시를 index.html 의 COMPANIES 에 넣는다.
import { createHash } from 'node:crypto';
const [key, token] = process.argv.slice(2);
if (!/^[a-z0-9]{1,8}$/.test(key || '') || !/^[a-z0-9]{6}$/.test(token || '')) {
  console.error('사용: node tools/hash.mjs <기업키(영문소문자/숫자 1~8자)> <토큰(영문소문자/숫자 6자)>');
  process.exit(1);
}
console.log(createHash('sha256').update(`${key}-${token}`).digest('hex'));
