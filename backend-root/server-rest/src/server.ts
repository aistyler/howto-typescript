import { ProtocolName } from '@my/protocol-rest';

export function bootstrap() {
  return '>>> server:' + ProtocolName.hello;
}

console.log(bootstrap());
