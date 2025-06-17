import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Linkedin,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Eye,
  Users,
  MessageSquare,
  Star,
  Target,
  Lightbulb,
} from "lucide-react"

const checklistItems = [
  {
    id: 1,
    title: "Foto profissional",
    description: "Use uma foto clara, profissional e sorrindo",
    completed: true,
    priority: "high",
  },
  {
    id: 2,
    title: "Título otimizado",
    description: "Inclua palavras-chave da sua área",
    completed: true,
    priority: "high",
  },
  {
    id: 3,
    title: "Resumo completo",
    description: "Escreva um resumo de 3-5 parágrafos",
    completed: false,
    priority: "high",
  },
  {
    id: 4,
    title: "Experiências detalhadas",
    description: "Adicione descrições com resultados quantificados",
    completed: true,
    priority: "medium",
  },
  {
    id: 5,
    title: "Habilidades relevantes",
    description: "Liste pelo menos 10 habilidades técnicas",
    completed: true,
    priority: "medium",
  },
  {
    id: 6,
    title: "Recomendações",
    description: "Solicite pelo menos 3 recomendações",
    completed: false,
    priority: "medium",
  },
  {
    id: 7,
    title: "Projetos em destaque",
    description: "Adicione seus melhores projetos",
    completed: false,
    priority: "low",
  },
  {
    id: 8,
    title: "Certificações",
    description: "Adicione certificados relevantes",
    completed: true,
    priority: "low",
  },
]

export default function MentoriaPage() {
  const completedItems = checklistItems.filter((item) => item.completed).length
  const totalItems = checklistItems.length
  const completionRate = (completedItems / totalItems) * 100

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Mentoria LinkedIn</h1>
        <p className="text-muted-foreground">Otimize seu perfil para ser encontrado por recrutadores</p>
      </div>

      {/* Métricas do Perfil */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pontuação Geral</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">92/100</div>
            <p className="text-xs text-muted-foreground">Perfil otimizado</p>
            <Progress value={92} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Visibilidade</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Alta</div>
            <p className="text-xs text-muted-foreground">+45% esta semana</p>
            <Badge variant="default" className="mt-2">
              Trending
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Visualizações</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2k</div>
            <p className="text-xs text-muted-foreground">Últimos 30 dias</p>
            <p className="text-xs text-green-600">+23% vs mês anterior</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conexões</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">487</div>
            <p className="text-xs text-muted-foreground">+12 esta semana</p>
            <Badge variant="secondary" className="mt-2">
              Crescendo
            </Badge>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Checklist de Otimização */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Checklist de Otimização
              </CardTitle>
              <CardDescription>
                {completedItems} de {totalItems} itens concluídos ({Math.round(completionRate)}%)
              </CardDescription>
              <Progress value={completionRate} />
            </CardHeader>
            <CardContent className="space-y-4">
              {checklistItems.map((item) => (
                <div key={item.id} className="flex items-start space-x-3 p-3 rounded-lg border">
                  <Checkbox checked={item.completed} className="mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className={`font-medium ${item.completed ? "line-through text-muted-foreground" : ""}`}>
                        {item.title}
                      </h4>
                      <Badge
                        variant={
                          item.priority === "high"
                            ? "destructive"
                            : item.priority === "medium"
                              ? "default"
                              : "secondary"
                        }
                        className="text-xs"
                      >
                        {item.priority === "high" ? "Alta" : item.priority === "medium" ? "Média" : "Baixa"}
                      </Badge>
                    </div>
                    <p className={`text-sm ${item.completed ? "text-muted-foreground" : "text-gray-600"}`}>
                      {item.description}
                    </p>
                  </div>
                  {item.completed ? (
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-yellow-600 mt-1" />
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Análise de Palavras-chave */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Análise de Palavras-chave
              </CardTitle>
              <CardDescription>
                Palavras-chave encontradas no seu perfil vs. vagas de Frontend Developer
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2 text-green-600">Palavras Encontradas</h4>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="default">React</Badge>
                    <Badge variant="default">JavaScript</Badge>
                    <Badge variant="default">HTML</Badge>
                    <Badge variant="default">CSS</Badge>
                    <Badge variant="default">Git</Badge>
                    <Badge variant="default">Frontend</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-red-600">Palavras Ausentes</h4>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">Next.js</Badge>
                    <Badge variant="outline">Redux</Badge>
                    <Badge variant="outline">Jest</Badge>
                    <Badge variant="outline">API REST</Badge>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <p className="text-sm font-medium text-blue-900">Sugestão da IA:</p>
                <p className="text-xs text-blue-700 mt-1">
                  Adicione "TypeScript" e "Next.js" no seu título e resumo. Essas palavras aparecem em 78% das vagas de
                  Frontend.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar com Dicas e Sugestões */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-yellow-500" />
                Dicas da Semana
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <p className="text-sm font-medium text-green-900">Título Profissional</p>
                  <p className="text-xs text-green-700 mt-1">
                    Use: "Desenvolvedor Frontend | React | JavaScript | TypeScript"
                  </p>
                </div>

                <div className="p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <p className="text-sm font-medium text-purple-900">Resumo Impactante</p>
                  <p className="text-xs text-purple-700 mt-1">
                    Comece com "Desenvolvedor apaixonado por criar experiências digitais..."
                  </p>
                </div>

                <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <p className="text-sm font-medium text-blue-900">Networking</p>
                  <p className="text-xs text-blue-700 mt-1">Conecte-se com 5 pessoas da sua área por semana</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Comparação com o Mercado</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Completude do perfil</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">92%</span>
                    <Badge variant="default">Top 15%</Badge>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm">Palavras-chave</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">6/10</span>
                    <Badge variant="secondary">Médio</Badge>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm">Atividade</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Alta</span>
                    <Badge variant="default">Top 20%</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Próximas Ações</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" size="sm">
                <MessageSquare className="h-4 w-4 mr-2" />
                Solicitar Recomendações
              </Button>
              <Button variant="outline" className="w-full" size="sm">
                <Linkedin className="h-4 w-4 mr-2" />
                Atualizar Resumo
              </Button>
              <Button variant="outline" className="w-full" size="sm">
                <Target className="h-4 w-4 mr-2" />
                Adicionar Projetos
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Estatísticas do Setor</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">78%</div>
                <p className="text-xs text-muted-foreground">
                  dos recrutadores usam LinkedIn para encontrar candidatos
                </p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">3x</div>
                <p className="text-xs text-muted-foreground">mais chances de ser contactado com perfil otimizado</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Simulador de Busca */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Como Recrutadores Te Encontram
          </CardTitle>
          <CardDescription>Simulação de como seu perfil aparece nas buscas</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 border rounded-lg bg-gray-50">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">JS</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-blue-600">João Silva</h3>
                <p className="text-sm text-gray-600">Desenvolvedor Frontend | React | JavaScript</p>
                <p className="text-xs text-gray-500 mt-1">São Paulo, Brasil • 487 conexões</p>
                <p className="text-sm mt-2">Desenvolvedor apaixonado por criar experiências digitais incríveis...</p>
              </div>
            </div>
          </div>

          <div className="flex gap-2 text-sm">
            <Badge variant="default">Aparece para: "React Developer"</Badge>
            <Badge variant="default">Aparece para: "Frontend JavaScript"</Badge>
            <Badge variant="secondary">Não aparece para: "TypeScript Developer"</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
