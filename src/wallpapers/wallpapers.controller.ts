import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ParseIntPipe,
} from '@nestjs/common';

@Controller('wallpapers')
export class WallpapersController {
  @Get()
  getAllWalls() {}
  @Get('/:n')
  getNWalls(@Param('n', ParseIntPipe) n) {}
  @Post()
  createWalls() {}
  @Post('/:id')
  updateWall() {}
}
