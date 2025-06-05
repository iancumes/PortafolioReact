import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary"> Mi</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Computer Science Student
            </h3>

            <p className="text-muted-foreground">
              Con 3 años de carrera en la Universidad del Valle de Guatemala,
              Realizando variedad de proyectos web y aplicaciones móviles.
              Con un conocimiento amplio en lenguajes de programación como
              JavaScript, Python y Java, así como en frameworks modernos como
              React y Node Js.
            </p>

            <p className="text-muted-foreground">
              Enfocado principalmente en el trabajo como backend developer,
              pero con un interés creciente en el desarrollo frontend y la
              creación de interfaces de usuario atractivas y funcionales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Contactame!
              </a>

              <a
                href="/CV_IanCumes.pdf"
                download="CV_IanCumes.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Descarga mi CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Fullstack Junior</h4>
                  <p className="text-muted-foreground">
                    Capaz de desarrollar aplicaciones web completas con
                    tecnologías modernas.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Desarollo de interfaces de usuario intuitivas y atractivas,
                    enfocadas en la experiencia del usuario.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Experiencia en la gestión de proyectos, asegurando la
                    entrega a tiempo y dentro del presupuesto con uso de metodologias "agile".
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};