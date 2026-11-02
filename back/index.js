const https = require('https');
const fs = require('fs');
const helmet = require('helmet');

// Включение HSTS и заголовков безопасности (Слайд 14)
app.use(helmet.hsts({
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
}));

const options = {
    key: fs.readFileSync('certs/server.key'),
    cert: fs.readFileSync('certs/server.crt')
};

https.createServer(options, app).listen(443, () => {
    console.log('Trusted HTTPS Server running on port 443');
});


const tablesConfig = [
    {
        tableName: 'card__curs',
        createQuery: `
            CREATE TABLE IF NOT EXISTS card__curs (
                id SERIAL PRIMARY KEY NOT NULL,
                title VARCHAR(255) NOT NULL,
                image_url VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `,
        initialData: [
            { title: 'Find Your Dream Home', image_url: 'http://localhost:5173/src/assets/card1_image.png' },
            { title: 'Unlock Property Value', image_url: 'http://localhost:5173/src/assets/card2_image.png' },
            { title: 'Effortless Property Management', image_url: 'http://localhost:5173/src/assets/card3_image.png' },
            { title: 'Smart Investments, Informed Decisions', image_url: 'http://localhost:5173/src/assets/card4_image.png' }
        ]
    },
    {
        tableName: 'building__curs',
        createQuery: `
            CREATE TABLE IF NOT EXISTS building__curs (
                id SERIAL PRIMARY KEY NOT NULL,
                title VARCHAR(255) NOT NULL,
                text VARCHAR(255) NOT NULL,
                info VARCHAR(255) NOT NULL,
                bed INTEGER NOT NULL,
                bath INTEGER NOT NULL,
                price INTEGER NOT NULL,
                image_url VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `,
        initialData: [
            {
                title: 'Seaside Serenity Villa',
                text: 'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...',
                price: 1250000,
                bed: 4,
                bath: 3,
                image_url: 'http://localhost:5173/src/assets/build1_image.png',
                info: 'Coastal Escapes - Where Waves Beckon'
            },
            {
                title: 'Metropolitan Haven',
                text: 'A chic and fully-furnished 2-bedroom apartment with panoramic city views...',
                bed: 2,
                bath: 2,
                price: 650000,
                image_url: 'http://localhost:5173/src/assets/build2_image.png',
                info: 'Urban Oasis - Life in the Heart of the City'
            },
            {
                title: 'Rustic Retreat Cottage',
                text: 'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...',
                bed: 3,
                bath: 3,
                price: 350000,
                image_url: 'http://localhost:5173/src/assets/build3_image.png',
                info: 'Countryside Charm - Escape to Nature\'s Embrace'
            },
            {
                title: 'Metropolitan Haven',
                text: 'A chic and fully-furnished 2-bedroom apartment with panoramic city views...',
                bed: 2,
                bath: 2,
                price: 650000,
                image_url: 'http://localhost:5173/src/assets/build2_image.png',
                info: 'Urban Oasis - Life in the Heart of the City'
            },
            {
                title: 'Seaside Serenity Villa',
                text: 'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...',
                price: 1250000,
                bed: 4,
                bath: 3,
                image_url: 'http://localhost:5173/src/assets/build1_image.png',
                info: 'Coastal Escapes - Where Waves Beckon'
            },
            {
                title: 'Rustic Retreat Cottage',
                text: 'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...',
                bed: 3,
                bath: 3,
                price: 350000,
                image_url: 'http://localhost:5173/src/assets/build3_image.png',
                info: 'Countryside Charm - Escape to Nature\'s Embrace'
            },
            {
                title: 'Rustic Retreat Cottage',
                text: 'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...',
                bed: 3,
                bath: 3,
                price: 350000,
                image_url: 'http://localhost:5173/src/assets/build3_image.png',
                info: 'Countryside Charm - Escape to Nature\'s Embrace'
            },
            {
                title: 'Metropolitan Haven',
                text: 'A chic and fully-furnished 2-bedroom apartment with panoramic city views...',
                bed: 2,
                bath: 2,
                price: 650000,
                image_url: 'http://localhost:5173/src/assets/build2_image.png',
                info: 'Urban Oasis - Life in the Heart of the City'
            },
            {
                title: 'Seaside Serenity Villa',
                text: 'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...',
                price: 1250000,
                bed: 4,
                bath: 3,
                image_url: 'http://localhost:5173/src/assets/build1_image.png',
                info: 'Coastal Escapes - Where Waves Beckon'
            },
            {
                title: 'Seaside Serenity Villa',
                text: 'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...',
                price: 1250000,
                bed: 4,
                bath: 3,
                image_url: 'http://localhost:5173/src/assets/build1_image.png',
                info: 'Coastal Escapes - Where Waves Beckon'
            },
            {
                title: 'Rustic Retreat Cottage',
                text: 'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...',
                bed: 3,
                bath: 3,
                price: 350000,
                image_url: 'http://localhost:5173/src/assets/build3_image.png',
                info: 'Countryside Charm - Escape to Nature\'s Embrace'
            },
            {
                title: 'Metropolitan Haven',
                text: 'A chic and fully-furnished 2-bedroom apartment with panoramic city views...',
                bed: 2,
                bath: 2,
                price: 650000,
                image_url: 'http://localhost:5173/src/assets/build2_image.png',
                info: 'Urban Oasis - Life in the Heart of the City'
            },
        ]
    },
    {
        tableName: 'response__curs',
        createQuery: `
            CREATE TABLE IF NOT EXISTS response__curs (
                id SERIAL PRIMARY KEY NOT NULL,
                stars INTEGER NOT NULL,
                title VARCHAR(255) NOT NULL,
                resp VARCHAR(255) NOT NULL,
                profile VARCHAR(255) NOT NULL,
                name VARCHAR(255) NOT NULL,
                country VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `,
        initialData: [
            {
                stars: 5,
                title: 'Exceptional Service!',
                resp: 'Our experience with Estatein was outstanding. Their team\'s dedication and professionalism made finding our ' +
                    'dream home a breeze. Highly recommended!',
                profile: 'http://localhost:5173/src/assets/response1_slide.png',
                name: 'Wade Warren',
                country: 'USA, California'
            },
            {
                stars: 5,
                title: 'Efficient and Reliable',
                resp: 'Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price.' +
                    ' We couldn\'t be happier with the results.',
                profile: 'http://localhost:5173/src/assets/response2_slide.png',
                name: 'Emelie Thomson',
                country: 'USA, Florida'
            },
            {
                stars: 5,
                title: 'Trusted Advisors',
                resp: 'The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were ' +
                    'impressive. Thank you for your support!',
                profile: 'http://localhost:5173/src/assets/response3_slide.png',
                name: 'John Mans',
                country: 'USA, Nevada'
            },
            {
                stars: 5,
                title: 'Exceptional Service!',
                resp: 'Our experience with Estatein was outstanding. Their team\'s dedication and professionalism made finding our ' +
                    'dream home a breeze. Highly recommended!',
                profile: 'http://localhost:5173/src/assets/response1_slide.png',
                name: 'Wade Warren',
                country: 'USA, California'
            },
            {
                stars: 5,
                title: 'Trusted Advisors',
                resp: 'The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were ' +
                    'impressive. Thank you for your support!',
                profile: 'http://localhost:5173/src/assets/response3_slide.png',
                name: 'John Mans',
                country: 'USA, Nevada'
            },
            {
                stars: 5,
                title: 'Efficient and Reliable',
                resp: 'Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price.' +
                    ' We couldn\'t be happier with the results.',
                profile: 'http://localhost:5173/src/assets/response2_slide.png',
                name: 'Emelie Thomson',
                country: 'USA, Florida'
            },
            {
                stars: 5,
                title: 'Trusted Advisors',
                resp: 'The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were ' +
                    'impressive. Thank you for your support!',
                profile: 'http://localhost:5173/src/assets/response3_slide.png',
                name: 'John Mans',
                country: 'USA, Nevada'
            },
            {
                stars: 5,
                title: 'Exceptional Service!',
                resp: 'Our experience with Estatein was outstanding. Their team\'s dedication and professionalism made finding our ' +
                    'dream home a breeze. Highly recommended!',
                profile: 'http://localhost:5173/src/assets/response1_slide.png',
                name: 'Wade Warren',
                country: 'USA, California'
            },
            {
                stars: 5,
                title: 'Efficient and Reliable',
                resp: 'Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price.' +
                    ' We couldn\'t be happier with the results.',
                profile: 'http://localhost:5173/src/assets/response2_slide.png',
                name: 'Emelie Thomson',
                country: 'USA, Florida'
            },
            {
                stars: 5,
                title: 'Efficient and Reliable',
                resp: 'Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price.' +
                    ' We couldn\'t be happier with the results.',
                profile: 'http://localhost:5173/src/assets/response2_slide.png',
                name: 'Emelie Thomson',
                country: 'USA, Florida'
            },
            {
                stars: 5,
                title: 'Exceptional Service!',
                resp: 'Our experience with Estatein was outstanding. Their team\'s dedication and professionalism made finding our ' +
                    'dream home a breeze. Highly recommended!',
                profile: 'http://localhost:5173/src/assets/response1_slide.png',
                name: 'Wade Warren',
                country: 'USA, California'
            },
            {
                stars: 5,
                title: 'Trusted Advisors',
                resp: 'The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were ' +
                    'impressive. Thank you for your support!',
                profile: 'http://localhost:5173/src/assets/response3_slide.png',
                name: 'John Mans',
                country: 'USA, Nevada'
            },
        ]
    },
    {
        tableName: 'faq__curs',
        createQuery: `
            CREATE TABLE IF NOT EXISTS faq__curs (
                id SERIAL PRIMARY KEY NOT NULL,
                title VARCHAR(255) NOT NULL,
                text VARCHAR(255) NOT NULL
            );
        `,
        initialData: [
            {
                title: 'How do I search for properties on Estatein?',
                text: 'Learn how to use our user-friendly search tools to find properties that match your criteria.'
            },
            {
                title: 'What documents do I need to sell my property through Estatein?',
                text: 'Find out about the necessary documentation for listing your property with us.'
            },
            {
                title: 'How can I contact an Estatein agent?',
                text: 'Discover the different ways you can get in touch with our experienced agents.'
            },
            {
                title: 'How can I contact an Estatein agent?',
                text: 'Discover the different ways you can get in touch with our experienced agents.'
            },
            {
                title: 'How do I search for properties on Estatein?',
                text: 'Learn how to use our user-friendly search tools to find properties that match your criteria.'
            },
            {
                title: 'What documents do I need to sell my property through Estatein?',
                text: 'Find out about the necessary documentation for listing your property with us.'
            },
            {
                title: 'What documents do I need to sell my property through Estatein?',
                text: 'Find out about the necessary documentation for listing your property with us.'
            },
            {
                title: 'How do I search for properties on Estatein?',
                text: 'Learn how to use our user-friendly search tools to find properties that match your criteria.'
            },
            {
                title: 'How can I contact an Estatein agent?',
                text: 'Discover the different ways you can get in touch with our experienced agents.'
            },
            {
                title: 'How can I contact an Estatein agent?',
                text: 'Discover the different ways you can get in touch with our experienced agents.'
            },
            {
                title: 'What documents do I need to sell my property through Estatein?',
                text: 'Find out about the necessary documentation for listing your property with us.'
            },
            {
                title: 'How do I search for properties on Estatein?',
                text: 'Learn how to use our user-friendly search tools to find properties that match your criteria.'
            },
        ]
    },
    {
        tableName: 'client__curs',
        createQuery: `
            CREATE TABLE IF NOT EXISTS client__curs (
                id SERIAL PRIMARY KEY NOT NULL,
                year INTEGER NOT NULL,
                name VARCHAR(255) NOT NULL,
                domain VARCHAR(255) NOT NULL,
                category VARCHAR(255) NOT NULL,
                coment VARCHAR(255) NOT NULL
            );
        `,
        initialData: [
            {
                year: 2019,
                name: 'ABC Corporation',
                domain: 'Commercial Real Estate',
                category: 'Luxury Home Development',
                coment: 'Estatein\'s expertise in finding the perfect office space for our expanding operations was invaluable. ' +
                    'They truly understand our business needs.'
            },
            {
                year: 2018,
                name: 'GreenTech Enterprises',
                domain: 'Commercial Real Estate',
                category: 'Retail Space',
                coment: 'Estatein\'s ability to identify prime retail locations helped us expand our brand presence. ' +
                    'They are a trusted partner in our growth.'
            },
            {
                year: 2018,
                name: 'GreenTech Enterprises',
                domain: 'Commercial Real Estate',
                category: 'Retail Space',
                coment: 'Estatein\'s ability to identify prime retail locations helped us expand our brand presence. ' +
                    'They are a trusted partner in our growth.'
            },
            {
                year: 2019,
                name: 'ABC Corporation',
                domain: 'Commercial Real Estate',
                category: 'Luxury Home Development',
                coment: 'Estatein\'s expertise in finding the perfect office space for our expanding operations was invaluable. ' +
                    'They truly understand our business needs.'
            },
        ]
    },
    {
        tableName: 'form__curs',
        createQuery: `
        CREATE TABLE IF NOT EXISTS form__curs (
            id SERIAL PRIMARY KEY NOT NULL,
            first_name VARCHAR(255) NOT NULL,
            last_name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            phone VARCHAR(50) NOT NULL,
            location VARCHAR(100) NOT NULL,
            property_type VARCHAR(100) NOT NULL,
            bathrooms INTEGER NOT NULL,
            bedrooms INTEGER NOT NULL,
            budget VARCHAR(100) NOT NULL,
            message TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `,
        initialData: []
    },
]



async function initializeTable(config) {
    try {
        // Создаем таблицу
        await pool.query(config.createQuery);
        console.log(`Таблица ${config.tableName} создана/проверена`);

        // Проверяем есть ли данные
        const checkDataQuery = `SELECT COUNT(*) as count FROM ${config.tableName}`;
        const result = await pool.query(checkDataQuery);
        const rowCount = parseInt(result.rows[0].count);

        // Если таблица пустая, заполняем данными
        if (rowCount === 0 && config.initialData && config.initialData.length > 0) {
            const columns = Object.keys(config.initialData[0]);

            // Создаем параметризованный запрос
            let insertQuery = `INSERT INTO ${config.tableName} (${columns.join(', ')}) VALUES `;
            const values = [];
            const placeholders = [];

            config.initialData.forEach((item, index) => {
                const itemPlaceholders = columns.map((_, colIndex) =>
                    `$${index * columns.length + colIndex + 1}`
                );
                placeholders.push(`(${itemPlaceholders.join(', ')})`);

                columns.forEach(col => {
                    values.push(item[col]);
                });
            });

            insertQuery += placeholders.join(', ');

            await pool.query(insertQuery, values);
            console.log(`Тестовые данные добавлены в таблицу ${config.tableName}`);
        } else {
            console.log(`В таблице ${config.tableName} уже есть ${rowCount} записей`);
        }

    } catch (error) {
        console.error(`Ошибка при инициализации таблицы ${config.tableName}:`, error.message);
    }
}

async function initializeAllTables() {
    console.log('Начало инициализации всех таблиц...');

    for (const config of tablesConfig) {
        await initializeTable(config);
    }

    console.log('Инициализация всех таблиц завершена');
}

initializeAllTables();

app.get('/card', async (req, res) => {
    try{
        const addtodor = await pool.query("SELECT * FROM card__curs")
        res.json(addtodor.rows)
    }
    catch(e){
        console.error(e.message);
    }
})
app.get('/building', async (req, res) => {
    try{
        const addtodor = await pool.query("SELECT * FROM building__curs")
        res.json(addtodor.rows)
    }
    catch(e){
        console.error(e.message);
    }
})
app.get('/response', async (req, res) => {
    try{
        const addtodor = await pool.query("SELECT * FROM response__curs")
        res.json(addtodor.rows)
    }
    catch(e){
        console.error(e.message);
    }
})
app.get('/faq', async (req, res) => {
    try{
        const addtodor = await pool.query("SELECT * FROM faq__curs")
        res.json(addtodor.rows)
    }
    catch(e){
        console.error(e.message);
    }
})
app.get('/client', async (req, res) => {
    try{
        const addtodor = await pool.query("SELECT * FROM client__curs")
        res.json(addtodor.rows)
    }
    catch(e){
        console.error(e.message);
    }
})

app.post('/contact', async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            phone,
            location,
            propertyType,
            bathrooms,
            bedrooms,
            budget,
            message
        } = req.body;

        // Сохраняем в базу данных
        const insertQuery = `
            INSERT INTO form__curs
            (first_name, last_name, email, phone, location, property_type, bathrooms, bedrooms, budget, message) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
            RETURNING *
        `;

        const values = [
            firstName,
            lastName,
            email,
            phone,
            location,
            propertyType,
            parseInt(bathrooms),
            parseInt(bedrooms),
            budget,
            message
        ];

        const result = await pool.query(insertQuery, values);

        console.log('Form data saved to database:', result.rows[0]);

        res.status(200).json({
            success: true,
            message: 'Form submitted successfully',
            data: result.rows[0]
        });
    } catch (error) {
        console.error('Error processing form:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

app.get('/api/properties/:id', async (req, res) => {
    const userClearance = req.user.clearance_level;
    const propertyId = req.params.id;

    const result = await pool.query('SELECT *, classification FROM properties WHERE id = $1', [propertyId]);
    const property = result.rows[0];

    if (property.classification > userClearance) {
        return res.status(403).json({ error: "Security Clearence Insufficient (Мандатный запрет)" });
    }
    res.json(property);
});
