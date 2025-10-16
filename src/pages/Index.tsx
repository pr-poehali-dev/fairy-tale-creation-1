import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо! Мы свяжемся с вами в ближайшее время! 🎉");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-3xl">✨</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink to-purple bg-clip-text text-transparent">
                Волшебные Истории
              </span>
            </div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection("hero")} className="hover:text-pink transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection("examples")} className="hover:text-pink transition-colors">
                Примеры
              </button>
              <button onClick={() => scrollToSection("services")} className="hover:text-pink transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection("reviews")} className="hover:text-pink transition-colors">
                Отзывы
              </button>
              <button onClick={() => scrollToSection("contact")} className="hover:text-pink transition-colors">
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-pink via-purple to-mint bg-clip-text text-transparent">
                  Добро пожаловать в мир волшебных сказок и мультфильмов!
                </span>
              </h1>
              <p className="text-xl text-gray-700">
                Тут каждая история — о тебе! Погружайся в увлекательные приключения, которые ты захочешь смотреть и
                читать снова и снова.
              </p>
              <p className="text-lg text-gray-600">
                Создаем сказки и мультфильмы, которые рассказывают о тебе и твоих близких!
              </p>
              <div className="flex gap-4">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-gradient-to-r from-pink to-purple hover:opacity-90 text-white px-8 py-6 text-lg rounded-full"
                >
                  Заказать сказку ✨
                </Button>
                <Button
                  onClick={() => scrollToSection("examples")}
                  variant="outline"
                  className="border-2 border-pink text-pink hover:bg-pink hover:text-white px-8 py-6 text-lg rounded-full"
                >
                  Смотреть примеры
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-pink/20 to-purple/20 rounded-3xl blur-3xl"></div>
              <img
                src="https://cdn.poehali.dev/projects/91589080-86a9-4c5e-bba7-0720181d389f/files/2c3fb18d-d435-4996-9464-9ea70fafab2a.jpg"
                alt="Волшебная сказка"
                className="relative rounded-3xl shadow-2xl w-full animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="examples" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-pink to-purple bg-clip-text text-transparent">
              Примеры наших работ
            </span>
          </h2>
          <p className="text-center text-gray-600 mb-12">Каждая история уникальна и создана с любовью</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Приключения Маши в волшебном лесу",
                type: "Книга сказок",
                image: "https://cdn.poehali.dev/projects/91589080-86a9-4c5e-bba7-0720181d389f/files/2c3fb18d-d435-4996-9464-9ea70fafab2a.jpg",
                icon: "BookOpen",
              },
              {
                title: "Космические приключения Артёма",
                type: "Мультфильм",
                image: "https://cdn.poehali.dev/projects/91589080-86a9-4c5e-bba7-0720181d389f/files/fdb27857-2026-44ed-9632-d7a00ff6da12.jpg",
                icon: "Film",
              },
              {
                title: "День рождения принцессы Софии",
                type: "Книга сказок",
                image: "https://cdn.poehali.dev/projects/91589080-86a9-4c5e-bba7-0720181d389f/files/f053fedd-fdd4-4c39-bd37-9eb1135ca584.jpg",
                icon: "Sparkles",
              },
            ].map((example, index) => (
              <Card
                key={index}
                className="overflow-hidden border-2 border-transparent hover:border-pink transition-all duration-300 hover:shadow-xl hover:scale-105 rounded-3xl"
              >
                <div className="relative h-64">
                  <img src={example.image} alt={example.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                    <Icon name={example.icon as any} size={16} className="text-pink" />
                    <span className="text-sm font-semibold text-gray-700">{example.type}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{example.title}</h3>
                  <p className="text-gray-600">Персонализированная история с именем ребенка</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-pink to-purple bg-clip-text text-transparent">
              Услуги и цены
            </span>
          </h2>
          <p className="text-center text-gray-600 mb-12">Выберите формат волшебной истории</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Книга сказок",
                price: "2 990 ₽",
                features: [
                  "Персонализированная история",
                  "20-30 страниц",
                  "Красочные иллюстрации",
                  "Печатный формат",
                  "Твёрдый переплёт",
                ],
                icon: "BookOpen",
                gradient: "from-pink to-purple",
              },
              {
                title: "Мультфильм",
                price: "4 990 ₽",
                features: [
                  "Анимационный ролик",
                  "3-5 минут",
                  "Озвучка персонажей",
                  "Музыкальное сопровождение",
                  "HD качество",
                ],
                icon: "Film",
                gradient: "from-purple to-mint",
                popular: true,
              },
              {
                title: "Комплект",
                price: "6 990 ₽",
                features: [
                  "Книга + Мультфильм",
                  "Скидка 15%",
                  "Единый сюжет",
                  "Дополнительные герои",
                  "Подарочная упаковка",
                ],
                icon: "Gift",
                gradient: "from-mint to-yellow",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden rounded-3xl transition-all duration-300 hover:scale-105 ${
                  service.popular ? "border-4 border-pink shadow-2xl" : "border-2 border-gray-200"
                }`}
              >
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-pink to-purple text-white px-6 py-2 rounded-bl-3xl font-bold">
                    Популярно ⭐
                  </div>
                )}
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-4`}>
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <div className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink to-purple bg-clip-text text-transparent">
                    {service.price}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-mint mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className={`w-full bg-gradient-to-r ${service.gradient} text-white hover:opacity-90 py-6 text-lg rounded-full`}
                  >
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-pink to-purple bg-clip-text text-transparent">
              Отзывы родителей
            </span>
          </h2>
          <p className="text-center text-gray-600 mb-12">Что говорят наши клиенты</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Елена",
                child: "мама Маши, 5 лет",
                text: "Дочка в восторге! Каждый вечер просит почитать её сказку. Иллюстрации просто волшебные, а то, что главная героиня — она сама, делает историю особенной.",
                rating: 5,
              },
              {
                name: "Дмитрий",
                child: "папа Артёма, 7 лет",
                text: "Заказали мультфильм на день рождения. Сын пересматривал его раз 20! Качество на высоте, озвучка профессиональная. Все гости были в восторге.",
                rating: 5,
              },
              {
                name: "Ольга",
                child: "мама Софии, 4 года",
                text: "Взяли комплект: книгу и мультфильм. Это лучший подарок, который мы делали дочке! Теперь она верит в волшебство ещё больше.",
                rating: 5,
              },
            ].map((review, index) => (
              <Card key={index} className="rounded-3xl border-2 border-gray-100 hover:border-pink transition-all hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-2xl">
                        ⭐
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{review.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink to-purple rounded-full flex items-center justify-center">
                      <Icon name="Heart" size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-800">{review.name}</div>
                      <div className="text-sm text-gray-600">{review.child}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-pink to-purple bg-clip-text text-transparent">
              Заказать волшебную историю
            </span>
          </h2>
          <p className="text-center text-gray-600 mb-12">Заполните форму, и мы свяжемся с вами в ближайшее время</p>

          <Card className="rounded-3xl border-2 border-gray-200 shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Ваше имя *</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="rounded-full border-2 border-gray-200 focus:border-pink"
                    placeholder="Как вас зовут?"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Email *</label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="rounded-full border-2 border-gray-200 focus:border-pink"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Телефон *</label>
                    <Input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="rounded-full border-2 border-gray-200 focus:border-pink"
                      placeholder="+7 (900) 123-45-67"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Расскажите о вашей идее</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="rounded-3xl border-2 border-gray-200 focus:border-pink min-h-32"
                    placeholder="Имя ребёнка, возраст, интересы, идея сюжета..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink via-purple to-mint text-white hover:opacity-90 py-6 text-lg rounded-full font-bold"
                >
                  Отправить заявку ✨
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-purple-900 to-pink-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-3xl">✨</span>
            <span className="text-2xl font-bold">Волшебные Истории</span>
          </div>
          <p className="text-purple-200 mb-6">Создаём сказки, которые живут вечно</p>
          <div className="flex justify-center gap-8 mb-6">
            <a href="#" className="hover:text-yellow transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-yellow transition-colors">
              VK
            </a>
            <a href="#" className="hover:text-yellow transition-colors">
              Telegram
            </a>
          </div>
          <p className="text-sm text-purple-300">© 2024 Волшебные Истории. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
