import { Module } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { RestaurantController } from './restaurant.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Restaurant, RestaurantSchema } from './schemas/restaurant.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Restaurant.name, schema: RestaurantSchema}]),
  ],
  controllers: [RestaurantController],
  providers: [RestaurantService]
})
export class RestaurantModule {}
