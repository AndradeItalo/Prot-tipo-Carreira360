import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Circle, Clock, BookOpen, Code, Zap, Target, TrendingUp, Play } from "lucide-react"

const roadmapSteps = [
  {
    id: 1,
    title: "HTML & CSS Fundamentals",
    description: "Estrutura e estilização básica de páginas web",
    status: "completed",
    progress: 100,
    estimatedTime: "2 semanas",
    topics: ["HTML5 Semântico", "CSS Grid & Flexbox", "Responsividade"],
  },
  {
    id: 2,
    title: "JavaScript Essentials",
    description: "Lógica de programação e manipulação do DOM",
    status: "completed",
    progress: 100,
    estimatedTime: "3 semanas",
    topics: ["ES6+", "DOM Manipulation", "Async/Await"],
  },
  {
    id: 3,
    title: "React Fundamentals",
    description: "Componentes, props, state e hooks básicos",
    status: "completed",
    progress: 100,
    estimatedTime: "4 semanas",
    topics: ["JSX", "Components", "useState", "useEffect"],
  },
  {
    id: 4,
    title: "React Advanced",
    description: "Context API, custom hooks e otimizações",
    status: "in-progress",
    progress: 65,
    estimatedTime: "3 semanas",
    topics: ["Context API", "Custom Hooks", "Performance"],
  },
  {
    id: 5,
    title: "TypeScript",
    description: "Tipagem estática para JavaScript",
    status: "in-progress",
    progress: 30,
    estimatedTime: "2 semanas",
    topics: ["Types", "Interfaces", "Generics"],
  },
  {
    id: 6,
    title: "Testing",
    description: "Testes unitários e de integração",
    status: "pending",
    progress: 0,
    estimatedTime: "2 semanas",
    topics: ["Jest", "React Testing Library", "E2E Tests"],
  },
  {
    id: 7,
    title: "Next.js",
    description: "Framework React para produção",
    status: "pending",
    progress: 0,
    estimatedTime: "3 semanas",
    topics: ["SSR", "API Routes", "App Router"],
  },
  {
    id: 8,
    title: "State Management",
    description: "Gerenciamento de estado complexo",
    status: "pending",
    progress: 0,
    estimatedTime: "2 semanas",
    topics: ["Redux", "Zustand", "Context Patterns"],
  },
]

export default function RoadmapPage() {
  const completedSteps = roadmapSteps.filter((step) => step.status === "completed").length
  const totalSteps = roadmapSteps.length
  const overallProgress = (completedSteps / totalSteps) * 100

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Roadmap Personalizado</h1>
        <p className="text-muted-foreground">Trilha de aprendizado baseada na vaga Frontend Developer</p>
      </div>

      {/* Resumo do Progresso */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Progresso Geral</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Math.round(overallProgress)}%</div>
            <p className="text-xs text-muted-foreground">
              {completedSteps} de {totalSteps} etapas concluídas
            </p>
            <Progress value={overallProgress} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Próxima Meta</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">TypeScript</div>
            <p className="text-xs text-muted-foreground">Estimativa: 2 semanas</p>
            <Progress value={30} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tempo Investido</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12h</div>
            <p className="text-xs text-muted-foreground">Esta semana</p>
            <Badge variant="default" className="mt-2">
              No ritmo!
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* Roadmap Steps */}
      <div className="space-y-4">
        {roadmapSteps.map((step, index) => (
          <Card key={step.id} className={`${step.status === "in-progress" ? "border-blue-500 bg-blue-50/50" : ""}`}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    {step.status === "completed" ? (
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    ) : step.status === "in-progress" ? (
                      <div className="h-6 w-6 rounded-full border-2 border-blue-600 bg-blue-100 flex items-center justify-center">
                        <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                      </div>
                    ) : (
                      <Circle className="h-6 w-6 text-gray-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="flex items-center gap-2">
                      {step.title}
                      {step.status === "in-progress" && <Badge variant="default">Em andamento</Badge>}
                      {step.status === "completed" && <Badge variant="secondary">Concluído</Badge>}
                    </CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">{step.estimatedTime}</p>
                  {step.status !== "pending" && <p className="text-sm font-medium">{step.progress}%</p>}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {step.status !== "pending" && <Progress value={step.progress} />}

                <div className="flex flex-wrap gap-2">
                  {step.topics.map((topic) => (
                    <Badge key={topic} variant="outline" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>

                {step.status === "in-progress" && (
                  <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                    <p className="text-sm font-medium text-blue-900 mb-1">Dica da IA:</p>
                    <p className="text-xs text-blue-700">
                      {step.id === 4 &&
                        "Foque em criar custom hooks reutilizáveis. Pratique com projetos reais para fixar os conceitos."}
                      {step.id === 5 &&
                        "Comece tipando componentes React existentes. Use o TypeScript playground para experimentar."}
                    </p>
                  </div>
                )}

                <div className="flex gap-2">
                  {step.status === "completed" && (
                    <Button variant="outline" size="sm">
                      <BookOpen className="h-4 w-4 mr-1" />
                      Revisar
                    </Button>
                  )}
                  {step.status === "in-progress" && (
                    <Button size="sm">
                      <Play className="h-4 w-4 mr-1" />
                      Continuar
                    </Button>
                  )}
                  {step.status === "pending" && (
                    <Button variant="outline" size="sm" disabled>
                      <Clock className="h-4 w-4 mr-1" />
                      Aguardando
                    </Button>
                  )}
                  <Button variant="ghost" size="sm">
                    <Code className="h-4 w-4 mr-1" />
                    Recursos
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Sugestões da IA */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-yellow-500" />
            Sugestões Personalizadas
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
              <p className="text-sm font-medium text-green-900">Próximos Passos</p>
              <p className="text-xs text-green-700 mt-1">
                Complete TypeScript antes de partir para testes. Isso facilitará muito o aprendizado.
              </p>
            </div>

            <div className="p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
              <p className="text-sm font-medium text-purple-900">Projeto Sugerido</p>
              <p className="text-xs text-purple-700 mt-1">
                Crie um todo app com TypeScript para praticar tipagem em React.
              </p>
            </div>

            <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <p className="text-sm font-medium text-blue-900">Mercado de Trabalho</p>
              <p className="text-xs text-blue-700 mt-1">
                85% das vagas Frontend pedem TypeScript. Priorize este tópico!
              </p>
            </div>

            <div className="p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
              <p className="text-sm font-medium text-orange-900">Dica de Estudo</p>
              <p className="text-xs text-orange-700 mt-1">
                Dedique 1h por dia. Consistência é mais importante que intensidade.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
