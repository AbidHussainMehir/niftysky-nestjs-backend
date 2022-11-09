import { Res, Controller, UploadedFile, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { RealEstateService } from './realestate.service';
import { CreateRealEstateDto } from './dto/create-realestate.dto';
import { UpdateRealEstateDto } from './dto/update-realestate.dto';
import { createReadStream } from 'fs';
import { join } from 'path';
import type { Response } from 'express';

@Controller('RealEstate')
export class RealEstateController {
  constructor(private readonly RealEstateService: RealEstateService) { }


  //preview image
  @Get('img/:imagename')
  findProfileImage(@Param('imagename') imagename, @Res() res): any {
    return res.sendFile(join(process.cwd(), 'files/' + imagename));
  }
  //upload image
  @Post('/file')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './files',
      filename: (req, file, callback) => {
        let filename = `${file.originalname}-${Date.now()}`
        callback(null, filename)
      }
    })
  }))

  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log("file", file)
    return this.RealEstateService.uploadFile(file);
  }
  @Post()
  create(@Body() createCollectionDto: CreateRealEstateDto) {
    return this.RealEstateService.create(createCollectionDto);
  }
  @Get()
  findAll() {
    return this.RealEstateService.findAll();
  }
  @Get('/categories')
  getCategories() {
    return this.RealEstateService.getCategories();
  }
  @Get('/category/:id')
  find(@Param('id') id: string) {
    return this.RealEstateService.find(+id);
  }
  @Get('/item/:id')
  findOne(@Param('id') id: string) {
    console.log(id)
    return this.RealEstateService.findOne(id);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCollectionDto: UpdateRealEstateDto) {
    return this.RealEstateService.update(+id, updateCollectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.RealEstateService.remove(+id);
  }
}
