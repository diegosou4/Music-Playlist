import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Login() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-[#212124]">
          <Tabs defaultValue="SingIn" className="cursor-pointer w-full max-w-sm dark">
            <TabsList className="cursor-pointer">
              <TabsTrigger value="SingIn" className="cursor-pointer">SingIn</TabsTrigger>
              <TabsTrigger value="Singup" className="cursor-pointer">Singup</TabsTrigger>
            </TabsList>
        <TabsContent value="SingIn">
              <Card className="w-full max-w-sm dark">
                <CardHeader>
                  <img src='../../assets/images/logo.png' alt="Logo" className="w-16 h-16 mx-auto mb-4" />
                  <CardTitle className="text-center">Login to your account</CardTitle>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="flex flex-col gap-6">
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your_email@example.com"
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <div className="flex items-center">
                          <Label htmlFor="password">Password</Label>
                          <a
                            href="#"
                            className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                          >
                            Forgot your password?
                          </a>
                        </div>
                        <Input id="password" type="password" required />
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                  <Button type="submit" className="w-full cursor-pointer">
                    Login
                  </Button>
                  <Button variant="outline" className="w-full cursor-pointer">
                    <img src='../../assets/images/google.png' alt="Google Icon" className="w-5 h-5 mr-2" />
                    Login with Google
                  </Button>
                </CardFooter>
              </Card>
          <TabsContent value="SingUp">

          </TabsContent>
        </TabsContent>
          </Tabs>
    </div>
  )
}
