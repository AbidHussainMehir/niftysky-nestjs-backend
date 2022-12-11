import { Res, Controller, UploadedFile, Get, Post, Body, Patch, Param, Delete, UseInterceptors, Query, ParseIntPipe } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { CollectionsService } from './collections.service';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
import { createReadStream } from 'fs';
import { join } from 'path';
import type { Response } from 'express';

@Controller('collections')
export class CollectionsController {
  constructor(private readonly collectionsService: CollectionsService) { }


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
    return this.collectionsService.uploadFile(file);
  }
  @Post()
  create(@Body() createCollectionDto: CreateCollectionDto) {
    return this.collectionsService.create(createCollectionDto);
  }
 
  @Get('/categories')
  getCategories() {
    return this.collectionsService.getCategories();
  }
  @Get('/item-by-slug/:id')
  findOneBySlug(@Param('id') id: string) {
    return this.collectionsService.findOneBySlug(id);
  }
  @Get('/item/:id')
  findOne(@Param('id') id: string) {
    return this.collectionsService.findOne(id);
  }

  @Get('/category/:id')
  find(
    @Param('id') id: string,
    @Query('page', ParseIntPipe) page: number,
    @Query('limit', ParseIntPipe) limit: number,

  ) {
    console.log("idd",id,page,limit)
    return this.collectionsService.find(+id, page, limit);
  }

  @Get()
  findAll() {
    return this.collectionsService.findAll();
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCollectionDto: UpdateCollectionDto) {
  //   return this.collectionsService.update(+id, updateCollectionDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.collectionsService.remove(id);
  }
}
