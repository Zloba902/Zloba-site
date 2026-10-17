
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const gravity = 0.5;

        // Растягиваем холст на весь экран
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const sparks = [];

        function create_spak(){
            const spark = {
                x: Math.random() * canvas.width, // Начальная координата по всей ширине
                y: canvas.height, // Начальная координата внизу   
                radius: ((Math.random() + 0.30) * 10),          // Начальный размер (радиус круга)
                speedX: (Math.random() - 0.5) * 1, // Скорость по X (от -2 до +2)
                speedY: -((Math.random() + 0.50) * 4)  // Скорость по Y (от -2 до +2)
            };
            
            // Добавляем созданную искру в наш список
            sparks.push(spark);
        };


        function animate() {

            ctx.clearRect(0, 0, canvas.width, canvas.height);


            for (let i = 0; i < sparks.length; i++) {
                const s = sparks[i];

                s.speedY += 0.2 * 0.05; 

                s.x += s.speedX * gravity;
                s.y += s.speedY;

                s.radius -= 0.1;


                if (s.radius <= 0) {
                    sparks.splice(i, 1);
                    i--; 
                    continue; 
                }

                ctx.beginPath();
                //ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
                ctx.fillRect(s.x, s.y,  s.radius, s.radius); 
                ctx.fillStyle = `rgba(247, 128, 250, ${s.radius / 10})`;
                ctx.fill();
            }
            requestAnimationFrame(animate);
        }

        
        create_spak();
        animate();
        
    setInterval(create_spak, 100);
