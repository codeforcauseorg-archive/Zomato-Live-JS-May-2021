import { Controller, Get, Post, Body, Param, Res } from '@nestjs/common';
import { ImagesService } from './images.service';
import { Response } from 'express';
import { Image } from './schemas/image.schema';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post()
  async create(@Body() imageBody: Image) {
    return this.imagesService.create(imageBody);
  }

  @Get(':fname')
  async findOne(@Param('fname') fname: string, @Res() response: Response) {
    let responseBody = await this.imagesService.findOne(fname);
    let buffer = Buffer.from(responseBody.content, 'base64');
    response.setHeader('Content-Type', 'image/png');
    response.send(buffer);
  }
}
