import { PartialType } from '@nestjs/mapped-types';
import { CreateRealEstateDto } from './create-realestate.dto';

export class UpdateRealEstateDto extends PartialType(CreateRealEstateDto) { }
