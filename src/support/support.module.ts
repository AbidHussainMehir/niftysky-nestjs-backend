import { Module } from '@nestjs/common';
import { SupportService } from './support.service';
import { SupportGateway } from './support.gateway';

@Module({
  providers: [SupportGateway, SupportService]
})
export class SupportModule {}
