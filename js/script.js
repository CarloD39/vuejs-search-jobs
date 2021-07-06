Vue.config.devtools = true;

new Vue (
    {
        el: "#search-app",

        data: {

            jobs: [
                {
                  id: 1,
                  company: 'Perferendis',
                  position: 'Developer',
                  description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                  created_at: '5/22/2021',
                  logo: 'logo.jpg',
                  city: 'Roma',
                  contract: 'Full Time'
                },
                {
                  id: 2,
                  company: 'johnson',
                  position: 'Developer',
                  description: 'Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                  created_at: '10/22/2021',
                  logo: 'logo.jpg',
                  city: 'Roma',
                  contract: 'Full Time'
                },
                {
                  id: 3,
                  company: 'Astra',
                  position: 'Developer',
                  description: 'Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                  created_at: '02/22/2021',
                  logo: 'logo.jpg',
                  city: 'Roma',
                  contract: 'Part Time'
                }

            ],

            starred: [1, 2, 3],
            applied: [4, 5]











        }

        methods: {
            
        }
    }
)