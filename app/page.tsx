import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { FileText, MessageSquare, Map, Linkedin, TrendingUp, Target, Clock, Award } from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard - Carreira360</h1>
        <p className="text-muted-foreground">Acelere sua carreira em tecnologia com nossa plataforma completa</p>
      </div>

      {/* Cards de Progresso */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Currículo</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <p className="text-xs text-muted-foreground">Completude</p>
            <Progress value={85} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Entrevistas</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Simulações feitas</p>
            <div className="flex gap-1 mt-2">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">JS</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Roadmap</CardTitle>
            <Map className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7/10</div>
            <p className="text-xs text-muted-foreground">Etapas concluídas</p>
            <Progress value={70} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">LinkedIn</CardTitle>
            <Linkedin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92</div>
            <p className="text-xs text-muted-foreground">Pontuação do perfil</p>
            <Badge variant="default" className="mt-2">
              Otimizado
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* Atalhos Principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Criar Currículo
            </CardTitle>
            <CardDescription>Use nossa IA para criar um currículo otimizado para vagas de tecnologia</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span>Dados Pessoais</span>
                <Badge variant="default">Completo</Badge>
              </div>
              <div className="flex justify-between text-sm">
                <span>Habilidades</span>
                <Badge variant="secondary">Pendente</Badge>
              </div>
              <div className="flex justify-between text-sm">
                <span>Projetos</span>
                <Badge variant="secondary">Pendente</Badge>
              </div>
            </div>
            <Button asChild className="w-full">
              <Link href="/curriculo">Continuar Currículo</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Fazer Entrevista Simulada
            </CardTitle>
            <CardDescription>Pratique com perguntas reais e receba feedback da IA</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4" />
                <span>Última simulação: há 2 dias</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Target className="h-4 w-4" />
                <span>Foco: Perguntas técnicas React</span>
              </div>
            </div>
            <Button asChild className="w-full">
              <Link href="/entrevista">Iniciar Simulação</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Map className="h-5 w-5" />
              Acessar Roadmap
            </CardTitle>
            <CardDescription>Trilha personalizada baseada na vaga que você quer</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span>Frontend Developer</span>
                <Badge variant="default">70% completo</Badge>
              </div>
              <Progress value={70} />
              <p className="text-xs text-muted-foreground">Próximo: Testes unitários com Jest</p>
            </div>
            <Button asChild className="w-full">
              <Link href="/roadmap">Ver Roadmap</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Linkedin className="h-5 w-5" />
              Receber Mentoria LinkedIn
            </CardTitle>
            <CardDescription>Otimize seu perfil para ser encontrado por recrutadores</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <span>Visibilidade: Alta</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Award className="h-4 w-4 text-blue-600" />
                <span>Pontuação: 92/100</span>
              </div>
            </div>
            <Button asChild className="w-full">
              <Link href="/mentoria">Melhorar Perfil</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Atividade Recente */}
      <Card>
        <CardHeader>
          <CardTitle>Atividade Recente</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Simulação de entrevista concluída</p>
                <p className="text-xs text-muted-foreground">Perguntas sobre React Hooks - há 2 dias</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Currículo atualizado</p>
                <p className="text-xs text-muted-foreground">Adicionado projeto de e-commerce - há 3 dias</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Roadmap atualizado</p>
                <p className="text-xs text-muted-foreground">Concluído módulo de TypeScript - há 5 dias</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
