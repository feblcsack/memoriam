"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Heart, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface Photo {
  id: number
  src: string
  alt: string
  title: string
  description: string
  date: string
  location?: string
  album: string
  tags: string[]
}

const samplePhotos: Photo[] = [
  {
    id: 1,
    src: "/2023(1).jpg",
    alt: "Beautiful sunset portrait",
    title: "Golden Hour Magic",
    description: "Captured during our evening walk at the beach. The golden light was absolutely perfect.",
    date: "2024-01-15",
    location: "Santa Monica Beach",
    album: "Beach Days",
    tags: ["portrait", "sunset", "beach"],
  },
  {
    id: 2,
    src: "/placeholder.svg?height=600&width=400",
    alt: "Candid laughing moment",
    title: "Pure Joy",
    description: "One of my favorite candid shots - her genuine laughter always lights up the room.",
    date: "2024-01-20",
    location: "Central Park",
    album: "Candid Moments",
    tags: ["candid", "laughter", "joy"],
  },
  {
    id: 3,
    src: "/placeholder.svg?height=600&width=400",
    alt: "Elegant formal portrait",
    title: "Elegance Defined",
    description: "From our anniversary dinner. She looked absolutely stunning in this dress.",
    date: "2024-02-14",
    location: "The Ritz Carlton",
    album: "Special Occasions",
    tags: ["formal", "elegant", "anniversary"],
  },
  {
    id: 4,
    src: "/placeholder.svg?height=600&width=400",
    alt: "Adventure hiking photo",
    title: "Mountain Explorer",
    description: "Our weekend hiking adventure. She conquered every trail with such determination.",
    date: "2024-03-10",
    location: "Yosemite National Park",
    album: "Adventures",
    tags: ["hiking", "nature", "adventure"],
  },
  {
    id: 5,
    src: "/placeholder.svg?height=600&width=400",
    alt: "Cozy coffee shop moment",
    title: "Coffee & Books",
    description: "Sunday morning at our favorite coffee shop. She was completely absorbed in her book.",
    date: "2024-03-22",
    location: "Blue Bottle Coffee",
    album: "Everyday Moments",
    tags: ["coffee", "reading", "cozy"],
  },
  {
    id: 6,
    src: "/placeholder.svg?height=600&width=400",
    alt: "Dancing celebration",
    title: "Dance Like Nobody's Watching",
    description: "At Sarah's wedding - she owned the dance floor all night long!",
    date: "2024-04-05",
    location: "Grand Ballroom",
    album: "Special Occasions",
    tags: ["dancing", "celebration", "wedding"],
  },
  {
    id: 7,
    src: "/placeholder.svg?height=600&width=400",
    alt: "Tropical vacation photo",
    title: "Paradise Found",
    description: "Our tropical getaway was perfect. This moment captured pure bliss.",
    date: "2024-05-18",
    location: "Maui, Hawaii",
    album: "Beach Days",
    tags: ["vacation", "tropical", "paradise"],
  },
  {
    id: 8,
    src: "/placeholder.svg?height=600&width=400",
    alt: "Autumn portrait",
    title: "Autumn Beauty",
    description: "Fall colors perfectly complemented her natural beauty.",
    date: "2024-10-15",
    location: "Central Park",
    album: "Seasonal",
    tags: ["autumn", "fall", "nature"],
  },
]

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [selectedAlbum, setSelectedAlbum] = useState<string>("All")

  const albums = ["All", ...Array.from(new Set(samplePhotos.map((photo) => photo.album)))]

  const filteredPhotos =
    selectedAlbum === "All" ? samplePhotos : samplePhotos.filter((photo) => photo.album === selectedAlbum)

  const openModal = (photo: Photo) => {
    setSelectedPhoto(photo)
  }

  const closeModal = () => {
    setSelectedPhoto(null)
  }

  const navigatePhoto = (direction: "prev" | "next") => {
    if (!selectedPhoto) return

    const currentIndex = filteredPhotos.findIndex((photo) => photo.id === selectedPhoto.id)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredPhotos.length - 1
    } else {
      newIndex = currentIndex < filteredPhotos.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedPhoto(filteredPhotos[newIndex])
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Photo Gallery</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A collection of beautiful moments captured through time. Each photo tells a story worth remembering.
        </p>
      </div>

      {/* Album Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {albums.map((album) => (
          <Button
            key={album}
            variant={selectedAlbum === album ? "default" : "outline"}
            onClick={() => setSelectedAlbum(album)}
            className="mb-2"
          >
            {album}
          </Button>
        ))}
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        {filteredPhotos.map((photo) => (
          <Card
            key={photo.id}
            className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            onClick={() => openModal(photo)}
          >
            <CardContent className="p-0">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-semibold text-sm mb-1">{photo.title}</h3>
                  <p className="text-white/80 text-xs line-clamp-2">{photo.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full w-full">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
              onClick={closeModal}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
              onClick={() => navigatePhoto("prev")}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
              onClick={() => navigatePhoto("next")}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {/* Image Container */}
            <div className="flex flex-col lg:flex-row bg-white rounded-lg overflow-hidden max-h-[90vh]">
              {/* Image */}
              <div className="relative flex-1 min-h-[300px] lg:min-h-[500px]">
                <Image
                  src={selectedPhoto.src || "/placeholder.svg"}
                  alt={selectedPhoto.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  priority
                />
              </div>

              {/* Photo Details */}
              <div className="lg:w-80 p-6 overflow-y-auto">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{selectedPhoto.title}</h2>
                    <Badge variant="secondary" className="mb-3">
                      {selectedPhoto.album}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{selectedPhoto.description}</p>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {new Date(selectedPhoto.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>

                    {selectedPhoto.location && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {selectedPhoto.location}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedPhoto.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full mt-4 bg-transparent">
                    <Heart className="h-4 w-4 mr-2" />
                    Add to Favorites
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
