"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { MessageSquare, Mic, Play, RotateCcw, CheckCircle, Clock, Bot } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function EntrevistaPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Entrevista Simulada</h1>
        <p className="text-muted-foreground">Pratique com perguntas reais e receba feedback personalizado</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Área Principal da Entrevista */}
        <div className="lg:col-span-2 space-y-6">
          {/* Avatar do Entrevistador */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <Avatar className="w-24 h-24">
                  <AvatarFallback className="bg-blue-100 text-blue-600 text-2xl">
                    <Bot className="w-12 h-12" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold">Ana - Entrevistadora IA</h3>
                  <p className="text-muted-foreground">Especialista em entrevistas técnicas</p>
                </div>
                <div className="flex gap-2">
                  <Badge variant="default">React</Badge>
                  <Badge variant="secondary">Frontend</Badge>
                  <Badge variant="secondary">Júnior</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pergunta Atual */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Pergunta 3 de 8
              </CardTitle>
              <Progress value={37.5} className="w-full" />
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <p className="font-medium text-blue-900 mb-2">Pergunta:</p>
                <p className="text-blue-800">
                  "Explique a diferença entre useState e useEffect no React. Quando você usaria cada um deles?"
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Tempo sugerido: 2-3 minutos</span>
              </div>
            </CardContent>
          </Card>

          {/* Área de Resposta */}
          <Card>
            <CardHeader>
              <CardTitle>Sua Resposta</CardTitle>
              <CardDescription>Digite sua resposta ou use o microfone para gravar</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Digite sua resposta aqui..."
                className="min-h-32"
                defaultValue="O useState é um hook que permite adicionar estado a componentes funcionais. Ele retorna um array com o valor atual do estado e uma função para atualizá-lo. Por exemplo, const [count, setCount] = useState(0).

Já o useEffect é usado para efeitos colaterais, como chamadas de API, manipulação do DOM ou limpeza de recursos. Ele executa após a renderização do componente."
              />

              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  <Mic className="h-4 w-4 mr-2" />
                  Gravar Resposta
                </Button>
                <Button variant="outline">
                  <Play className="h-4 w-4" />
                </Button>
                <Button variant="outline">
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Feedback da IA */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-green-600" />
                Feedback da IA
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <p className="text-sm font-medium text-green-900">Pontos Positivos</p>
                  <ul className="text-xs text-green-700 mt-1 space-y-1">
                    <li>• Explicou claramente a diferença entre os hooks</li>
                    <li>• Forneceu exemplo prático do useState</li>
                    <li>• Demonstrou conhecimento técnico sólido</li>
                  </ul>
                </div>

                <div className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                  <p className="text-sm font-medium text-yellow-900">Sugestões de Melhoria</p>
                  <ul className="text-xs text-yellow-700 mt-1 space-y-1">
                    <li>• Adicione um exemplo prático do useEffect</li>
                    <li>• Mencione o array de dependências do useEffect</li>
                    <li>• Fale sobre casos de uso específicos</li>
                  </ul>
                </div>

                <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <p className="text-sm font-medium text-blue-900">Clareza da Comunicação</p>
                  <p className="text-xs text-blue-700 mt-1">
                    Sua explicação foi clara e bem estruturada. Continue mantendo esse ritmo de fala pausado e
                    organizado.
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  Refazer Resposta
                </Button>
                <Button className="flex-1">Próxima Pergunta</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar com Progresso e Dicas */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Progresso da Sessão</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Perguntas respondidas</span>
                  <span>3/8</span>
                </div>
                <Progress value={37.5} />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Pergunta 1: Excelente</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Pergunta 2: Muito bom</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-blue-600" />
                  <span>Pergunta 3: Em andamento</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dicas para Esta Pergunta</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm space-y-2">
                <p className="font-medium">Estrutura sugerida:</p>
                <ul className="text-muted-foreground space-y-1">
                  <li>1. Defina cada hook</li>
                  <li>2. Dê exemplos práticos</li>
                  <li>3. Explique quando usar cada um</li>
                  <li>4. Mencione boas práticas</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Histórico de Simulações</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span>React Hooks</span>
                  <Badge variant="default">8.5/10</Badge>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>JavaScript ES6</span>
                  <Badge variant="default">9.0/10</Badge>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>Algoritmos</span>
                  <Badge variant="secondary">7.2/10</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Configurações</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Nível</span>
                  <Badge variant="outline">Júnior</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Foco</span>
                  <Badge variant="outline">Frontend</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Tecnologia</span>
                  <Badge variant="outline">React</Badge>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                Alterar Configurações
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
