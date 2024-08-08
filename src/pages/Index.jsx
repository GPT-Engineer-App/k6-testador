import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cat, Heart, Info, Paw, Star, ArrowRight } from "lucide-react";

const CatBreed = ({ name, description, icon, rating }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
  >
    <Card className="mb-4 hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            {icon}
            {name}
          </span>
          <div className="flex items-center">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
            ))}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
        <Button variant="link" className="mt-2 p-0">
          Learn more <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const catBreeds = [
    { name: "Siamese", description: "Known for their distinctive color points and blue eyes.", icon: <Cat className="h-5 w-5" />, rating: 5 },
    { name: "Maine Coon", description: "One of the largest domestic cat breeds, known for their intelligence and playful personality.", icon: <Paw className="h-5 w-5" />, rating: 4 },
    { name: "Persian", description: "Recognized for their long fur and flat faces.", icon: <Heart className="h-5 w-5" />, rating: 4 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % catImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-6 text-center text-purple-800"
        >
          Purrfect Cat World
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8 rounded-lg overflow-hidden shadow-xl"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={catImages[currentImageIndex]}
              alt={`Cat ${currentImageIndex + 1}`}
              className="mx-auto object-cover w-full h-[400px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-2">
              {catImages.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="breeds">Breeds</TabsTrigger>
            <TabsTrigger value="facts">Fun Facts</TabsTrigger>
            <TabsTrigger value="care">Cat Care</TabsTrigger>
          </TabsList>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="breeds">
                <h2 className="text-2xl font-semibold mb-4 text-purple-700">Popular Cat Breeds</h2>
                {catBreeds.map((breed, index) => (
                  <CatBreed key={index} {...breed} />
                ))}
              </TabsContent>
              <TabsContent value="facts">
                <h2 className="text-2xl font-semibold mb-4 text-purple-700">Fun Cat Facts</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Cats sleep for about 70% of their lives.</li>
                  <li>A group of cats is called a "clowder".</li>
                  <li>Cats have over 20 different vocalizations.</li>
                  <li>A cat's hearing is much more sensitive than a human's or dog's.</li>
                  <li>Cats can jump up to six times their length.</li>
                </ul>
              </TabsContent>
              <TabsContent value="care">
                <h2 className="text-2xl font-semibold mb-4 text-purple-700">Cat Care Tips</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Provide fresh water daily</li>
                  <li>Feed a balanced diet appropriate for their age</li>
                  <li>Regular vet check-ups are important</li>
                  <li>Brush your cat's teeth regularly</li>
                  <li>Provide plenty of mental and physical stimulation</li>
                </ul>
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </Tabs>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-gradient-to-r from-purple-200 to-pink-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-800">
                <Info className="h-6 w-6" />
                Fascinating Feline Fact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-800 leading-relaxed">
                Did you know that cats have been domesticated for over 9,000 years? These enigmatic creatures have 
                captivated humans with their independence, agility, and affectionate nature. From the regal Siamese 
                to the fluffy Persian, cats come in a wide variety of breeds, each with its own unique characteristics 
                and charming personalities.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Badge variant="outline" className="text-purple-700 border-purple-700 text-lg py-2 px-4">
            Crafted with 🐾 for feline enthusiasts
          </Badge>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
