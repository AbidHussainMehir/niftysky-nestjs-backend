import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { SupportService } from './support.service';
import { CreateSupportDto } from './dto/create-support.dto';
import { UpdateSupportDto } from './dto/update-support.dto';

@WebSocketGateway()
export class SupportGateway {
  constructor(private readonly supportService: SupportService) {}

  @SubscribeMessage('createSupport')
  create(@MessageBody() createSupportDto: CreateSupportDto) {
    return this.supportService.create(createSupportDto);
  }

  @SubscribeMessage('findAllSupport')
  findAll() {
    return this.supportService.findAll();
  }

  @SubscribeMessage('findOneSupport')
  findOne(@MessageBody() id: number) {
    return this.supportService.findOne(id);
  }

  @SubscribeMessage('updateSupport')
  update(@MessageBody() updateSupportDto: UpdateSupportDto) {
    return this.supportService.update(updateSupportDto.id, updateSupportDto);
  }

  @SubscribeMessage('removeSupport')
  remove(@MessageBody() id: number) {
    return this.supportService.remove(id);
  }
}
