import Image from "next/image"
import { Play, Search, ShoppingCart, Truck, Utensils, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f0e6]">
      <header className="container mx-auto py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-amber-600 text-2xl">🍔</span>
            <span className="font-bold text-xl">Burger</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="border-b-2 border-amber-500 pb-1 font-medium">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              Menu
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              Offers
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              Burgers
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              Restaurants
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
            <button aria-label="Cart">
              <ShoppingCart className="h-5 w-5" />
            </button>
            <Button variant="outline" className="bg-white text-blue-600 border-blue-200 hover:bg-blue-50">
              Sign in
            </Button>
          </div>
        </nav>
      </header>

      <main>
        <section className="container mx-auto py-8 md:py-12">
          <div className="bg-[#faf3e3] rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 items-center p-6 md:p-10">
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    Savor Every Bite with Our <span className="text-orange-500">Handcrafted Burgers</span>
                  </h1>
                  <p className="mt-4 text-gray-700">
                    Fresh Ingredients, Bold Flavors
                    <br />
                    Crafted Just For You
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6">Explore Menu</Button>
                  <Button variant="outline" className="border-gray-300 flex items-center gap-2">
                    <Play className="h-4 w-4" />
                    Watch Video
                  </Button>
                </div>
              </div>

              <div className="relative mt-8 md:mt-0">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Delicious burger with fries"
                  width={500}
                  height={500}
                  className="object-contain"
                />

                <div className="absolute top-4 left-4 bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center">
                  <span className="font-bold">20% off</span>
                </div>

                <div className="absolute bottom-4 left-0 right-0 flex flex-col gap-3">
                  <div className="bg-white rounded-lg p-3 shadow-md mx-auto flex items-center gap-3 w-64">
                    <div className="bg-gray-100 p-2 rounded-md">
                      <Truck className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Lightning Delivery</p>
                      <p className="text-sm text-gray-500">Hot & Fresh in 30 Mins</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-3 shadow-md mx-auto flex items-center gap-3 w-64">
                    <div className="bg-gray-100 p-2 rounded-md">
                      <Utensils className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Dine-In Ready</p>
                      <p className="text-sm text-gray-500">Enjoy At Your Table</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-10 pt-0 md:pt-4">
              <div className="relative">
                <div className="flex overflow-x-auto gap-4 py-6 px-2 scrollbar-hide">
                  <BurgerCard
                    name="Classic Burger"
                    price="$8.99"
                    color="bg-orange-400"
                    image="/placeholder.svg?height=150&width=150"
                  />
                  <BurgerCard
                    name="Veggie Burger"
                    price="$7.49"
                    color="bg-green-500"
                    image="/placeholder.svg?height=150&width=150"
                  />
                  <BurgerCard
                    name="Cheeseburger"
                    price="$9.99"
                    color="bg-purple-600"
                    image="/placeholder.svg?height=150&width=150"
                  />
                  <BurgerCard
                    name="Bacon Burger"
                    price="$10.49"
                    color="bg-blue-500"
                    image="/placeholder.svg?height=150&width=150"
                  />
                </div>

                <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function BurgerCard({ name, price, color, image }: { name: string; price: string; color: string; image: string }) {
  return (
    <div className={`${color} rounded-xl p-4 min-w-[220px] flex flex-col items-center`}>
      <div className="h-36 w-36 relative mb-2">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover rounded-lg" />
      </div>
      <h3 className="font-bold text-white text-lg">{name}</h3>
      <p className="font-bold text-white my-1">{price}</p>
      <Button className="bg-white text-black hover:bg-gray-100 mt-2">Order Now</Button>
    </div>
  )
}
