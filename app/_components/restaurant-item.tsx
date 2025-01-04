import { Restaurant } from "@prisma/client";
import Image from "next/image";
import { formatCurrency } from "../_helpers/price";
import { HeartIcon, StarIcon } from "lucide-react";
import { Button } from "./ui/button";

interface RestaurantItemProps {
  restaurant: Restaurant;
}

const RestaurantItem = ({ restaurant }: RestaurantItemProps) => {
  return (
    <div className="min-w-[266px] max-w-[266px] space-y-3">
      <div className="relative h-[136px] w-full">
        <Image
          src={restaurant.imageUrl}
          fill
          className="rounded-lg object-cover"
          alt={restaurant.name}
        />

        <div className="absolute left-2 top-2 flex items-center gap-[2px] rounded-full bg-white px-2">
          <StarIcon size={12} className="fill-yellow-300 text-yellow-500" />
          <span className="text-sm font-semibold">4.5</span>
        </div>

        <Button className="absolute right-2 top-2 h-7 w-7 rounded-full bg-white/50 p-0 shadow-lg">
          <HeartIcon size={16} className="fill-white/45 text-black" />
        </Button>
      </div>

      <div>
        <h3 className="text-sm font-semibold">{restaurant.name}</h3>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex gap-2">
          <Image
            src="/icon-delivery.png"
            width={16}
            height={16}
            alt="Entrega"
            quality={100}
          />
          <span className="text-xs text-muted-foreground">
            {Number(restaurant.deliveryFee) === 0
              ? "Entrega Grátis"
              : formatCurrency(Number(restaurant.deliveryFee))}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/icon-time.png"
            width={12}
            height={12}
            alt=""
            quality={100}
          />
          <span className="text-xs text-muted-foreground">
            {restaurant.deliveryTimeMinutes} min
          </span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantItem;
