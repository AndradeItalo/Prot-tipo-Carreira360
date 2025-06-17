import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { User, Briefcase, Code, Award, Download, Lightbulb, Plus, X } from "lucide-react"

export default function CurriculoPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Currículo Automatizado</h1>
        <p className="text-muted-foreground">Crie um currículo otimizado com sugestões da IA</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Formulário Principal */}
        <div className="lg:col-span-2 space-y-6">
          {/* Dados Pessoais */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Dados Pessoais
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="nome">Nome Completo</Label>
                  <Input id="nome" defaultValue="João Silva" />
                </div>
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" defaultValue="joao.silva@email.com" />
                </div>
                <div>
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input id="telefone" defaultValue="(11) 99999-9999" />
                </div>
                <div>
                  <Label htmlFor="linkedin">LinkedIn</Label>
                  <Input id="linkedin" defaultValue="linkedin.com/in/joaosilva" />
                </div>
              </div>
              <div>
                <Label htmlFor="resumo">Resumo Profissional</Label>
                <Textarea
                  id="resumo"
                  placeholder="Descreva brevemente sua experiência e objetivos..."
                  defaultValue="Desenvolvedor Frontend com 2 anos de experiência em React e JavaScript. Apaixonado por criar interfaces intuitivas e performáticas."
                />
              </div>
            </CardContent>
          </Card>

          {/* Habilidades */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Habilidades Técnicas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="default">JavaScript</Badge>
                <Badge variant="default">React</Badge>
                <Badge variant="default">TypeScript</Badge>
                <Badge variant="default">Node.js</Badge>
                <Badge variant="default">HTML/CSS</Badge>
                <Badge variant="default">Git</Badge>
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-1" />
                  Adicionar
                </Button>
              </div>
              <div>
                <Label htmlFor="nova-skill">Adicionar Nova Habilidade</Label>
                <div className="flex gap-2">
                  <Input id="nova-skill" placeholder="Ex: Python, Docker, AWS..." />
                  <Button size="sm">Adicionar</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Projetos */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Projetos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold">E-commerce React</h4>
                  <Button variant="ghost" size="sm">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Aplicação completa de e-commerce com carrinho, pagamento e painel admin
                </p>
                <div className="flex flex-wrap gap-1 mb-2">
                  <Badge variant="secondary" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Node.js
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    MongoDB
                  </Badge>
                </div>
                <div className="flex gap-2 text-sm">
                  <span className="text-muted-foreground">GitHub:</span>
                  <span>github.com/joao/ecommerce</span>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Adicionar Projeto
              </Button>
            </CardContent>
          </Card>

          {/* Certificações */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Certificações
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">React Developer Certificate</p>
                    <p className="text-sm text-muted-foreground">Meta - 2023</p>
                  </div>
                  <Badge variant="default">Verificado</Badge>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">JavaScript Algorithms</p>
                    <p className="text-sm text-muted-foreground">freeCodeCamp - 2022</p>
                  </div>
                  <Badge variant="default">Verificado</Badge>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Adicionar Certificação
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar com Sugestões da IA */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-yellow-500" />
                Sugestões da IA
              </CardTitle>
              <CardDescription>Dicas para melhorar seu currículo</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <p className="text-sm font-medium text-blue-900">Resumo Profissional</p>
                  <p className="text-xs text-blue-700 mt-1">
                    Adicione métricas específicas, como "Aumentei a performance em 30%"
                  </p>
                </div>

                <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <p className="text-sm font-medium text-green-900">Habilidades</p>
                  <p className="text-xs text-green-700 mt-1">Considere adicionar: Next.js, Tailwind CSS, Jest</p>
                </div>

                <div className="p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <p className="text-sm font-medium text-purple-900">Projetos</p>
                  <p className="text-xs text-purple-700 mt-1">
                    Adicione links para demonstrações ao vivo dos seus projetos
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pontuação do Currículo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">85/100</div>
                <p className="text-sm text-muted-foreground mb-4">Muito bom!</p>
                <div className="space-y-2 text-left">
                  <div className="flex justify-between text-sm">
                    <span>Completude</span>
                    <span className="text-green-600">90%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Palavras-chave</span>
                    <span className="text-yellow-600">75%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Formatação</span>
                    <span className="text-green-600">95%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button className="w-full" size="lg">
            <Download className="h-4 w-4 mr-2" />
            Gerar PDF
          </Button>
        </div>
      </div>
    </div>
  )
}
