import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImagesModule } from './images/images.module';
import { UserModule } from './user/user.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    ImagesModule,
    MongooseModule.forRoot(
      'mongodb+srv://vasu:devsinghal@cluster0.8b0lx.mongodb.net/step3?retryWrites=true&w=majority',
      { useFindAndModify: false },
    ),
    UserModule,
    RestaurantModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
