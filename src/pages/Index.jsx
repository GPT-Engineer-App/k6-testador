import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Cat, Heart, Info, Paw } from "lucide-react";

const CatBreed = ({ name, description, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Card className="mb-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {icon}
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  </motion.div>
);

const catImages = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kittyply_edit1.jpg/1200px-Kittyply_edit1.jpg",
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("breeds");

  const catBreeds = [
    { name: "Siamese", description: "Known for their distinctive color points and blue eyes.", icon: <Cat className="h-5 w-5" /> },
    { name: "Maine Coon", description: "One of the largest domestic cat breeds, known for their intelligence and playful personality.", icon: <Paw className="h-5 w-5" /> },
    { name: "Persian", description: "Recognized for their long fur and flat faces.", icon: <Heart className="h-5 w-5" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-6 text-center text-purple-800"
        >
          All About Cats
        </motion.h1>

        <Carousel className="mb-8">
          <CarouselContent>
            {catImages.map((src, index) => (
              <CarouselItem key={index}>
                <img
                  src={src}
                  alt={`Cat ${index + 1}`}
                  className="mx-auto object-cover w-full h-[400px] rounded-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="breeds">Breeds</TabsTrigger>
            <TabsTrigger value="facts">Fun Facts</TabsTrigger>
            <TabsTrigger value="care">Cat Care</TabsTrigger>
          </TabsList>
          <TabsContent value="breeds">
            <h2 className="text-2xl font-semibold mb-4 text-purple-700">Popular Cat Breeds</h2>
            {catBreeds.map((breed, index) => (
              <CatBreed key={index} name={breed.name} description={breed.description} icon={breed.icon} />
            ))}
          </TabsContent>
          <TabsContent value="facts">
            <h2 className="text-2xl font-semibold mb-4 text-purple-700">Fun Cat Facts</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Cats sleep for about 70% of their lives.</li>
              <li>A group of cats is called a "clowder".</li>
              <li>Cats have over 20 different vocalizations.</li>
            </ul>
          </TabsContent>
          <TabsContent value="care">
            <h2 className="text-2xl font-semibold mb-4 text-purple-700">Cat Care Tips</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide fresh water daily</li>
              <li>Feed a balanced diet appropriate for their age</li>
              <li>Regular vet check-ups are important</li>
            </ul>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5" />
                Did You Know?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700">
                Cats have been domesticated for thousands of years. They are known for their
                independence, agility, and affectionate nature. Cats come in various breeds, each with its unique
                characteristics and personalities.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <div className="mt-8 text-center">
          <Badge variant="outline" className="text-purple-700 border-purple-700">
            Made with ❤️ for cat lovers
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Index;
