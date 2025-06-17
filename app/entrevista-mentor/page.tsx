"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  Video,
  VideoOff,
  Mic,
  MicOff,
  PhoneOff,
  MessageSquare,
  Settings,
  Calendar,
  Clock,
  Star,
  Send,
  RepeatIcon as Record,
  Share,
} from "lucide-react"
import { useState } from "react"

export default function EntrevistaMentorPage() {
  const [isVideoOn, setIsVideoOn] = useState(true)
  const [isAudioOn, setIsAudioOn] = useState(true)
  const [isChatOpen, setIsChatOpen] = useState(true)
  const [isInCall, setIsInCall] = useState(false)
  const [message, setMessage] = useState("")

  const chatMessages = [
    {
      id: 1,
      sender: "Ana Silva",
      message: "Olá! Pronto para começarmos?",
      time: "14:30",
      isMe: false,
    },
    {
      id: 2,
      sender: "Você",
      message: "Sim, estou pronto!",
      time: "14:31",
      isMe: true,
    },
    {
      id: 3,
      sender: "Ana Silva",
      message: "Ótimo! Vamos começar com uma pergunta sobre sua experiência com React.",
      time: "14:31",
      isMe: false,
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Entrevista com Mentor - Carreira360</h1>
        <p className="text-muted-foreground">Conecte-se com profissionais experientes e acelere sua carreira</p>
      </div>

      {!isInCall ? (
        // Tela de Agendamento e Mentores Disponíveis
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Próxima Sessão Agendada */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Próxima Sessão Agendada
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src="/placeholder.svg?height=64&width=64" />
                    <AvatarFallback className="bg-blue-100 text-blue-600">AS</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold">Ana Silva</h3>
                    <p className="text-sm text-muted-foreground">Senior Frontend Developer @ Google</p>
                    <div className="flex items-center gap-4 mt-2 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Hoje, 15:00</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>45 min</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span>4.9</span>
                      </div>
                    </div>
                  </div>
                  <Button onClick={() => setIsInCall(true)} className="bg-green-600 hover:bg-green-700">
                    <Video className="h-4 w-4 mr-2" />
                    Entrar na Chamada
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Mentores Disponíveis */}
            <Card>
              <CardHeader>
                <CardTitle>Mentores Disponíveis Agora</CardTitle>
                <CardDescription>Agende uma sessão instantânea ou para mais tarde</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    name: "Carlos Mendes",
                    role: "Tech Lead @ Microsoft",
                    specialties: ["React", "Node.js", "System Design"],
                    rating: 4.8,
                    price: "R$ 80/hora",
                    available: "Agora",
                    avatar: "CM",
                  },
                  {
                    name: "Mariana Costa",
                    role: "Engineering Manager @ Nubank",
                    specialties: ["JavaScript", "Leadership", "Career"],
                    rating: 4.9,
                    price: "R$ 120/hora",
                    available: "16:00",
                    avatar: "MC",
                  },
                  {
                    name: "Pedro Santos",
                    role: "Senior Developer @ iFood",
                    specialties: ["Frontend", "Mobile", "React Native"],
                    rating: 4.7,
                    price: "R$ 90/hora",
                    available: "17:30",
                    avatar: "PS",
                  },
                ].map((mentor, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-purple-100 text-purple-600">{mentor.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-semibold">{mentor.name}</h4>
                      <p className="text-sm text-muted-foreground">{mentor.role}</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {mentor.specialties.map((specialty) => (
                          <Badge key={specialty} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-3 mt-2 text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>{mentor.rating}</span>
                        </div>
                        <span className="font-medium text-green-600">{mentor.price}</span>
                        <Badge variant={mentor.available === "Agora" ? "default" : "secondary"}>
                          {mentor.available}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        Agendar
                      </Button>
                      {mentor.available === "Agora" && (
                        <Button size="sm">
                          <Video className="h-4 w-4 mr-1" />
                          Chamar
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar com Estatísticas */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Suas Estatísticas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Sessões realizadas</span>
                    <span className="font-medium">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Avaliação média</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="font-medium">4.6</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Tempo total</span>
                    <span className="font-medium">6h 30min</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Taxa de aprovação</span>
                    <span className="font-medium text-green-600">87%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Próximas Sessões</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span>Amanhã, 14:00</span>
                    <Badge variant="outline">React</Badge>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>Sex, 16:30</span>
                    <Badge variant="outline">System Design</Badge>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>Sáb, 10:00</span>
                    <Badge variant="outline">Behavioral</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Feedback Recente</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <p className="text-sm font-medium text-green-900">Ana Silva</p>
                    <p className="text-xs text-green-700">
                      "Excelente conhecimento técnico. Continue praticando algoritmos!"
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-3 w-3 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        // Interface de Videochamada
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-[calc(100vh-200px)]">
          {/* Área Principal de Vídeo */}
          <div className="lg:col-span-3 space-y-4">
            <Card className="h-full">
              <CardContent className="p-0 h-full">
                <div className="relative h-full bg-gray-900 rounded-lg overflow-hidden">
                  {/* Vídeo do Entrevistador */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Avatar className="w-32 h-32">
                      <AvatarFallback className="bg-blue-100 text-blue-600 text-4xl">AS</AvatarFallback>
                    </Avatar>
                  </div>

                  {/* Vídeo do Usuário (Picture-in-Picture) */}
                  <div className="absolute top-4 right-4 w-48 h-36 bg-gray-800 rounded-lg border-2 border-white overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      {isVideoOn ? (
                        <Avatar className="w-16 h-16">
                          <AvatarFallback className="bg-green-100 text-green-600">EU</AvatarFallback>
                        </Avatar>
                      ) : (
                        <div className="text-white text-sm">Câmera desligada</div>
                      )}
                    </div>
                  </div>

                  {/* Status da Conexão */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Conectado</span>
                  </div>

                  {/* Timer da Sessão */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    <Clock className="h-4 w-4 inline mr-1" />
                    23:45
                  </div>

                  {/* Controles de Vídeo */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-3 bg-black/70 px-6 py-3 rounded-full">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsAudioOn(!isAudioOn)}
                      className={`text-white hover:bg-white/20 ${!isAudioOn ? "bg-red-500 hover:bg-red-600" : ""}`}
                    >
                      {isAudioOn ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsVideoOn(!isVideoOn)}
                      className={`text-white hover:bg-white/20 ${!isVideoOn ? "bg-red-500 hover:bg-red-600" : ""}`}
                    >
                      {isVideoOn ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
                    </Button>

                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                      <Share className="h-5 w-5" />
                    </Button>

                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                      <Record className="h-5 w-5" />
                    </Button>

                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                      <Settings className="h-5 w-5" />
                    </Button>

                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => setIsInCall(false)}
                      className="bg-red-500 hover:bg-red-600"
                    >
                      <PhoneOff className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Lateral */}
          <div className="space-y-4">
            <Card className="h-full flex flex-col">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Chat</CardTitle>
                  <Button variant="ghost" size="sm" onClick={() => setIsChatOpen(!isChatOpen)}>
                    <MessageSquare className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col p-0">
                <ScrollArea className="flex-1 px-4">
                  <div className="space-y-3">
                    {chatMessages.map((msg) => (
                      <div key={msg.id} className={`flex ${msg.isMe ? "justify-end" : "justify-start"}`}>
                        <div
                          className={`max-w-[80%] p-2 rounded-lg text-sm ${
                            msg.isMe ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-900"
                          }`}
                        >
                          <p>{msg.message}</p>
                          <p className={`text-xs mt-1 ${msg.isMe ? "text-blue-100" : "text-gray-500"}`}>{msg.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <Separator />
                <div className="p-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Digite sua mensagem..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          setMessage("")
                        }
                      }}
                    />
                    <Button size="sm">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Informações da Sessão */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">Sessão Atual</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-blue-100 text-blue-600">AS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">Ana Silva</p>
                    <p className="text-xs text-muted-foreground">Senior Frontend @ Google</p>
                  </div>
                </div>
                <Separator />
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Duração:</span>
                    <span>45 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Foco:</span>
                    <Badge variant="secondary" className="text-xs">
                      React
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Gravação:</span>
                    <Badge variant="default" className="text-xs">
                      Ativa
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Notas Rápidas */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">Notas da Sessão</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-xs">
                  <div className="p-2 bg-yellow-50 rounded border-l-2 border-yellow-400">
                    <p className="font-medium">Pontos a melhorar:</p>
                    <p>- Explicar hooks com mais detalhes</p>
                  </div>
                  <div className="p-2 bg-green-50 rounded border-l-2 border-green-400">
                    <p className="font-medium">Pontos fortes:</p>
                    <p>- Boa comunicação técnica</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}
