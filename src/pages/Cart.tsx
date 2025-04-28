
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';
import { Product } from '@/components/ProductCard';
import { ShoppingCart } from 'lucide-react';

const Cart = () => {
  // In a real app, we'd get this from context or Redux
  const [cartItems, setCartItems] = useState<Product[]>([
    {
      id: '1',
      name: 'Modern Leather Sneakers',
      price: '$89.99',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      store: 'Nike',
      link: 'https://www.nike.com'
    },
    {
      id: '2',
      name: 'Casual Cotton T-Shirt',
      price: '$29.99',
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      store: 'Zara',
      link: 'https://www.zara.com'
    },
  ]);

  const removeFromCart = (productId: string) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
    toast({
      title: 'Item removed',
      description: 'The item has been removed from your cart.',
    });
  };

  const checkoutAll = () => {
    // In a real app, this would open all the store tabs
    cartItems.forEach((item) => {
      window.open(item.link, '_blank');
    });
  };

  return (
    <div className="container mx-auto px-4 pt-20 pb-10 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 flex items-center text-navy">
          <ShoppingCart className="mr-2 h-8 w-8" />
          Your Click It Cart
        </h1>
        
        {cartItems.length === 0 ? (
          <Card className="w-full py-12">
            <CardContent className="flex flex-col items-center justify-center gap-4">
              <div className="h-16 w-16 rounded-full bg-sky-blue/20 flex items-center justify-center">
                <ShoppingCart className="h-8 w-8 text-sky-blue" />
              </div>
              <h2 className="text-xl font-medium text-center">Your cart is empty</h2>
              <p className="text-center text-gray-500 max-w-md">
                Start by uploading a product image or pasting a link on the homepage to find products.
              </p>
              <Button className="btn-primary mt-2" onClick={() => window.location.href = "/"}>
                Find Products
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              {cartItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-48 h-48">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-4 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium text-lg">{item.name}</h3>
                            <p className="text-sm text-gray-500">{item.store}</p>
                          </div>
                          <p className="text-lg font-bold">{item.price}</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </Button>
                        <Button 
                          onClick={() => window.open(item.link, '_blank')}
                          className="btn-primary"
                        >
                          Go to Store
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-medium">Total Items:</span>
                <span className="text-lg">{cartItems.length}</span>
              </div>
              
              <div className="flex justify-end">
                <Button
                  className="btn-primary"
                  onClick={checkoutAll}
                >
                  Open All Stores
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
