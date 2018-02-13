function  getRating(): any {
 const max = this.rating.reduce((prev, elem) => prev += elem, 0) * 5;
 const Is = this.rating.reduce((prev, elem, ind) => prev += elem * (ind + 1), 0);
 return (Is * 100 / max);
}

export const data = {
  goods: [
    {
      id: 1,
      name: 'Petronas',
      producer: 'Petronas',
      type: 'bMassels',
      price: 5000,
      rating: [1, 0, 0, 0, 0],
      url: ('/' + this.name + '/' + this.id),
      cardPhoto: './assets/picturesCard/300/Petronas.jpeg',
      goodPhoto: './assets/picturesCard/large/PetronasLarge.jpeg',
      srcForFrame: 'https://www.youtube.com/embed/tauZ9Zsvu-c',
      characteristics: ['Один', 'Два', 'Три', 'Непобедим', 'Температура замерзания -25 С', 'пятдесят', 'Сто сорок'],
      description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cupiditate deserunt expedita\n' +
      '                  fugiat illo laborum praesentium voluptatibus. Consectetur dolores illum magnam non quaerat quia\n' +
      '                  voluptas? Aliquid architecto eveniet ipsam voluptatem!\n' +
      '                A at, deleniti illo inventore iusto sint. Consequatur culpa dolor eius ex hic in inventore quaerat\n' +
      '                  reprehenderit vero voluptatem! Aliquid, consectetur rerum! Alias culpa deserunt exercitationem, itaque\n' +
      '                  nemo officia quisquam!\n' +
      '                Iste iure molestias nemo nisi quae sequi soluta vel? Adipisci ducimus ea eos, ex illum iure laborum\n' +
      '                  maiores, modi necessitatibus nisi nobis officia porro quod saepe voluptas? Accusantium, dolores,\n' +
      '                  voluptatum?\n' +
      '                A alias aliquid ipsum modi sequi. Accusantium architecto atque autem doloribus enim error facere\n' +
      '                  illum incidunt, ipsum nihil reiciendis, tenetur voluptates! Ab autem eum fugiat laboriosam magnam,\n' +
      '                  officiis repudiandae soluta?\n' +
      '                Dolores dolorum enim labore nam. Adipisci aliquid consectetur cumque delectus dicta eligendi est et\n' +
      '                  explicabo fugiat id illo in inventore magnam maiores nesciunt praesentium, quos recusandae saepe sequi\n' +
      '                  tempore ut!\n' +
      '                Corporis, culpa explicabo. Alias dolor dolore, dolores ducimus ea earum, error hic libero maiores\n' +
      '                  modi nam nihil nobis numquam omnis quia quibusdam quidem quod soluta sunt suscipit, velit vero\n' +
      '                  voluptate!\n' +
      '                A, consectetur deleniti eum iste nemo repudiandae voluptatum? Aperiam doloremque harum non possimus\n' +
      '                  quas. Aliquam assumenda consectetur consequuntur cumque eius expedita facilis id, incidunt, itaque\n' +
      '                  officia perspiciatis reiciendis voluptas voluptates.\n' +
      '                Asperiores commodi consectetur dolor dolore, dolores laudantium quas recusandae sapiente ut\n' +
      '                  voluptatem? Dolorem dolores error facilis harum id laborum quas reprehenderit veniam. Earum enim\n' +
      '                  facere harum maxime nihil rem sint!\n' +
      '                A aperiam blanditiis consectetur debitis deserunt dolorem doloribus ducimus ea earum error ex,\n' +
      '                  excepturi fugit id labore magni minus necessitatibus neque nesciunt nihil officia repellendus\n' +
      '                  similique tempore tenetur unde, voluptatem.\n' +
      '                Ab atque cumque cupiditate deleniti, facilis nisi quidem totam vel? A alias aliquid at blanditiis\n' +
      '                  deleniti dolorem dolores eaque enim fuga incidunt magnam molestias necessitatibus nihil omnis\n' +
      '                  possimus, saepe sint.\n' +
      '                Aut consequuntur dignissimos eaque nisi quas, quisquam? Aperiam corporis deserunt eveniet iusto\n' +
      '                  laborum mollitia nihil veritatis voluptate. Amet beatae facere magnam maiores, nesciunt quasi quis quo\n' +
      '                  saepe velit veritatis vitae?\n' +
      '                Consectetur cum dolor doloremque ducimus error expedita, hic id ipsam non perspiciatis qui\n' +
      '                  recusandae reiciendis saepe sint voluptas. Eos harum minus necessitatibus nisi perspiciatis placeat\n' +
      '                  quis reprehenderit sunt tempore voluptatem?\n' +
      '                Atque beatae, earum iusto maiores odit officiis quidem veniam? Ab ad aut deleniti dignissimos eum\n' +
      '                  explicabo laboriosam non numquam officia, omnis placeat recusandae reiciendis repudiandae sapiente\n' +
      '                  similique soluta temporibus voluptatum.\n',
      recommendations: [
        {
          Author: 'Vasya',
          text: 'Очень удачная покупка. Я очень рад'
        },
        {
          Author: 'Аноним',
          text: 'Доболен'
        },
        {
          Author: 'Пузырёк',
          text: 'Лорен Ипсон Катался  на  этом  масле'
        },
        {
          Author: 'Лодаш',
          text: 'Очень удачная покупка. Я очень рад'
        },
        {
          Author: 'Реакт',
          text: 'Очень удачная покупка. Я очень рад'
        },
      ],
      getRating,
    },
    {
      id: 2,
      name: 'XTC',
      producer: 'BARDAHL',
      type: 'gMassels',
      price: 3000,
      rating: [0, 0, 0, 0, 0],
      url: '/' + this.name + '/' + this.id,
      cardPhoto: './assets/picturesCard/300/XTC.jpeg',
      goodPhoto: './assets/picturesCard/large/XTCLarge.jpeg',
      srcForFrame: 'https://www.youtube.com/embed/tauZ9Zsvu-c',
      characteristics: ['Один', 'Два', 'Три', 'Непобедим', 'Температура замерзания -25 С', 'пятдесят', 'Сто сорок'],
      description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cupiditate deserunt expedita\n' +
      '                  fugiat illo laborum praesentium voluptatibus. Consectetur dolores illum magnam non quaerat quia\n' +
      '                  voluptas? Aliquid architecto eveniet ipsam voluptatem!\n' +
      '                A at, deleniti illo inventore iusto sint. Consequatur culpa dolor eius ex hic in inventore quaerat\n' +
      '                  reprehenderit vero voluptatem! Aliquid, consectetur rerum! Alias culpa deserunt exercitationem, itaque\n' +
      '                  nemo officia quisquam!\n' +
      '                Iste iure molestias nemo nisi quae sequi soluta vel? Adipisci ducimus ea eos, ex illum iure laborum\n' +
      '                  maiores, modi necessitatibus nisi nobis officia porro quod saepe voluptas? Accusantium, dolores,\n' +
      '                  voluptatum?\n' +
      '                A alias aliquid ipsum modi sequi. Accusantium architecto atque autem doloribus enim error facere\n' +
      '                  illum incidunt, ipsum nihil reiciendis, tenetur voluptates! Ab autem eum fugiat laboriosam magnam,\n' +
      '                  officiis repudiandae soluta?\n' +
      '                Dolores dolorum enim labore nam. Adipisci aliquid consectetur cumque delectus dicta eligendi est et\n' +
      '                  explicabo fugiat id illo in inventore magnam maiores nesciunt praesentium, quos recusandae saepe sequi\n' +
      '                  tempore ut!\n' +
      '                Corporis, culpa explicabo. Alias dolor dolore, dolores ducimus ea earum, error hic libero maiores\n' +
      '                  modi nam nihil nobis numquam omnis quia quibusdam quidem quod soluta sunt suscipit, velit vero\n' +
      '                  voluptate!\n' +
      '                A, consectetur deleniti eum iste nemo repudiandae voluptatum? Aperiam doloremque harum non possimus\n' +
      '                  quas. Aliquam assumenda consectetur consequuntur cumque eius expedita facilis id, incidunt, itaque\n' +
      '                  officia perspiciatis reiciendis voluptas voluptates.\n' +
      '                Asperiores commodi consectetur dolor dolore, dolores laudantium quas recusandae sapiente ut\n' +
      '                  voluptatem? Dolorem dolores error facilis harum id laborum quas reprehenderit veniam. Earum enim\n' +
      '                  facere harum maxime nihil rem sint!\n' +
      '                A aperiam blanditiis consectetur debitis deserunt dolorem doloribus ducimus ea earum error ex,\n' +
      '                  excepturi fugit id labore magni minus necessitatibus neque nesciunt nihil officia repellendus\n' +
      '                  similique tempore tenetur unde, voluptatem.\n' +
      '                Ab atque cumque cupiditate deleniti, facilis nisi quidem totam vel? A alias aliquid at blanditiis\n' +
      '                  deleniti dolorem dolores eaque enim fuga incidunt magnam molestias necessitatibus nihil omnis\n' +
      '                  possimus, saepe sint.\n' +
      '                Aut consequuntur dignissimos eaque nisi quas, quisquam? Aperiam corporis deserunt eveniet iusto\n' +
      '                  laborum mollitia nihil veritatis voluptate. Amet beatae facere magnam maiores, nesciunt quasi quis quo\n' +
      '                  saepe velit veritatis vitae?\n' +
      '                Consectetur cum dolor doloremque ducimus error expedita, hic id ipsam non perspiciatis qui\n' +
      '                  recusandae reiciendis saepe sint voluptas. Eos harum minus necessitatibus nisi perspiciatis placeat\n' +
      '                  quis reprehenderit sunt tempore voluptatem?\n' +
      '                Atque beatae, earum iusto maiores odit officiis quidem veniam? Ab ad aut deleniti dignissimos eum\n' +
      '                  explicabo laboriosam non numquam officia, omnis placeat recusandae reiciendis repudiandae sapiente\n' +
      '                  similique soluta temporibus voluptatum.\n',
      recommendations: [
        {
          Author: 'Vasya',
          text: 'Очень удачная покупка. Я очень рад'
        },
        {
          Author: 'Аноним',
          text: 'Доболен'
        },
        {
          Author: 'Пузырёк',
          text: 'Лорен Ипсон Катался  на  этом  масле'
        },
        {
          Author: 'Лодаш',
          text: 'Очень удачная покупка. Я очень рад'
        },
        {
          Author: 'Реакт',
          text: 'Очень удачная покупка. Я очень рад'
        },
      ],
      getRating,
    },
    {
      id: 3,
      name: '15W-50',
      producer: 'AOF',
      type: 'bMassels',
      price: 2000,
      rating: [0, 0, 0, 0, 0],
      url: '/' + this.name + '/' + this.id,
      cardPhoto: './assets/picturesCard/300/15W-50.jpeg',
      goodPhoto: './assets/picturesCard/large/15W-50Large.jpeg',
      srcForFrame: 'https://www.youtube.com/embed/tauZ9Zsvu-c',
      characteristics: ['Один', 'Два', 'Три', 'Непобедим', 'Температура замерзания -25 С', 'пятдесят', 'Сто сорок'],
      description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cupiditate deserunt expedita\n' +
      '                  fugiat illo laborum praesentium voluptatibus. Consectetur dolores illum magnam non quaerat quia\n' +
      '                  voluptas? Aliquid architecto eveniet ipsam voluptatem!\n' +
      '                A at, deleniti illo inventore iusto sint. Consequatur culpa dolor eius ex hic in inventore quaerat\n' +
      '                  reprehenderit vero voluptatem! Aliquid, consectetur rerum! Alias culpa deserunt exercitationem, itaque\n' +
      '                  nemo officia quisquam!\n' +
      '                Iste iure molestias nemo nisi quae sequi soluta vel? Adipisci ducimus ea eos, ex illum iure laborum\n' +
      '                  maiores, modi necessitatibus nisi nobis officia porro quod saepe voluptas? Accusantium, dolores,\n' +
      '                  voluptatum?\n' +
      '                A alias aliquid ipsum modi sequi. Accusantium architecto atque autem doloribus enim error facere\n' +
      '                  illum incidunt, ipsum nihil reiciendis, tenetur voluptates! Ab autem eum fugiat laboriosam magnam,\n' +
      '                  officiis repudiandae soluta?\n' +
      '                Dolores dolorum enim labore nam. Adipisci aliquid consectetur cumque delectus dicta eligendi est et\n' +
      '                  explicabo fugiat id illo in inventore magnam maiores nesciunt praesentium, quos recusandae saepe sequi\n' +
      '                  tempore ut!\n' +
      '                Corporis, culpa explicabo. Alias dolor dolore, dolores ducimus ea earum, error hic libero maiores\n' +
      '                  modi nam nihil nobis numquam omnis quia quibusdam quidem quod soluta sunt suscipit, velit vero\n' +
      '                  voluptate!\n' +
      '                A, consectetur deleniti eum iste nemo repudiandae voluptatum? Aperiam doloremque harum non possimus\n' +
      '                  quas. Aliquam assumenda consectetur consequuntur cumque eius expedita facilis id, incidunt, itaque\n' +
      '                  officia perspiciatis reiciendis voluptas voluptates.\n' +
      '                Asperiores commodi consectetur dolor dolore, dolores laudantium quas recusandae sapiente ut\n' +
      '                  voluptatem? Dolorem dolores error facilis harum id laborum quas reprehenderit veniam. Earum enim\n' +
      '                  facere harum maxime nihil rem sint!\n' +
      '                A aperiam blanditiis consectetur debitis deserunt dolorem doloribus ducimus ea earum error ex,\n' +
      '                  excepturi fugit id labore magni minus necessitatibus neque nesciunt nihil officia repellendus\n' +
      '                  similique tempore tenetur unde, voluptatem.\n' +
      '                Ab atque cumque cupiditate deleniti, facilis nisi quidem totam vel? A alias aliquid at blanditiis\n' +
      '                  deleniti dolorem dolores eaque enim fuga incidunt magnam molestias necessitatibus nihil omnis\n' +
      '                  possimus, saepe sint.\n' +
      '                Aut consequuntur dignissimos eaque nisi quas, quisquam? Aperiam corporis deserunt eveniet iusto\n' +
      '                  laborum mollitia nihil veritatis voluptate. Amet beatae facere magnam maiores, nesciunt quasi quis quo\n' +
      '                  saepe velit veritatis vitae?\n' +
      '                Consectetur cum dolor doloremque ducimus error expedita, hic id ipsam non perspiciatis qui\n' +
      '                  recusandae reiciendis saepe sint voluptas. Eos harum minus necessitatibus nisi perspiciatis placeat\n' +
      '                  quis reprehenderit sunt tempore voluptatem?\n' +
      '                Atque beatae, earum iusto maiores odit officiis quidem veniam? Ab ad aut deleniti dignissimos eum\n' +
      '                  explicabo laboriosam non numquam officia, omnis placeat recusandae reiciendis repudiandae sapiente\n' +
      '                  similique soluta temporibus voluptatum.\n',
      recommendations: [
        {
          Author: 'Vasya',
          text: 'Очень удачная покупка. Я очень рад'
        },
        {
          Author: 'Аноним',
          text: 'Доболен'
        },
        {
          Author: 'Пузырёк',
          text: 'Лорен Ипсон Катался  на  этом  масле'
        },
        {
          Author: 'Лодаш',
          text: 'Очень удачная покупка. Я очень рад'
        },
        {
          Author: 'Реакт',
          text: 'Очень удачная покупка. Я очень рад'
        },
      ],
      getRating,
    },
    {
      id: 4,
      name: '5W-30',
      producer: 'Euro LAB',
      type: 'bMassels',
      price: 4650,
      rating: [0, 0, 0, 0, 0],
      url: '/' + this.name + '/' + this.id,
      cardPhoto: './assets/picturesCard/300/euroLab.jpeg',
      goodPhoto: './assets/picturesCard/large/EuroLabLarge.jpeg',
      srcForFrame: 'https://www.youtube.com/embed/tauZ9Zsvu-c',
      characteristics: ['Один', 'Два', 'Три', 'Непобедим', 'Температура замерзания -25 С', 'пятдесят', 'Сто сорок'],
      description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cupiditate deserunt expedita\n' +
      '                  fugiat illo laborum praesentium voluptatibus. Consectetur dolores illum magnam non quaerat quia\n' +
      '                  voluptas? Aliquid architecto eveniet ipsam voluptatem!\n' +
      '                A at, deleniti illo inventore iusto sint. Consequatur culpa dolor eius ex hic in inventore quaerat\n' +
      '                  reprehenderit vero voluptatem! Aliquid, consectetur rerum! Alias culpa deserunt exercitationem, itaque\n' +
      '                  nemo officia quisquam!\n' +
      '                Iste iure molestias nemo nisi quae sequi soluta vel? Adipisci ducimus ea eos, ex illum iure laborum\n' +
      '                  maiores, modi necessitatibus nisi nobis officia porro quod saepe voluptas? Accusantium, dolores,\n' +
      '                  voluptatum?\n' +
      '                A alias aliquid ipsum modi sequi. Accusantium architecto atque autem doloribus enim error facere\n' +
      '                  illum incidunt, ipsum nihil reiciendis, tenetur voluptates! Ab autem eum fugiat laboriosam magnam,\n' +
      '                  officiis repudiandae soluta?\n' +
      '                Dolores dolorum enim labore nam. Adipisci aliquid consectetur cumque delectus dicta eligendi est et\n' +
      '                  explicabo fugiat id illo in inventore magnam maiores nesciunt praesentium, quos recusandae saepe sequi\n' +
      '                  tempore ut!\n' +
      '                Corporis, culpa explicabo. Alias dolor dolore, dolores ducimus ea earum, error hic libero maiores\n' +
      '                  modi nam nihil nobis numquam omnis quia quibusdam quidem quod soluta sunt suscipit, velit vero\n' +
      '                  voluptate!\n' +
      '                A, consectetur deleniti eum iste nemo repudiandae voluptatum? Aperiam doloremque harum non possimus\n' +
      '                  quas. Aliquam assumenda consectetur consequuntur cumque eius expedita facilis id, incidunt, itaque\n' +
      '                  officia perspiciatis reiciendis voluptas voluptates.\n' +
      '                Asperiores commodi consectetur dolor dolore, dolores laudantium quas recusandae sapiente ut\n' +
      '                  voluptatem? Dolorem dolores error facilis harum id laborum quas reprehenderit veniam. Earum enim\n' +
      '                  facere harum maxime nihil rem sint!\n' +
      '                A aperiam blanditiis consectetur debitis deserunt dolorem doloribus ducimus ea earum error ex,\n' +
      '                  excepturi fugit id labore magni minus necessitatibus neque nesciunt nihil officia repellendus\n' +
      '                  similique tempore tenetur unde, voluptatem.\n' +
      '                Ab atque cumque cupiditate deleniti, facilis nisi quidem totam vel? A alias aliquid at blanditiis\n' +
      '                  deleniti dolorem dolores eaque enim fuga incidunt magnam molestias necessitatibus nihil omnis\n' +
      '                  possimus, saepe sint.\n' +
      '                Aut consequuntur dignissimos eaque nisi quas, quisquam? Aperiam corporis deserunt eveniet iusto\n' +
      '                  laborum mollitia nihil veritatis voluptate. Amet beatae facere magnam maiores, nesciunt quasi quis quo\n' +
      '                  saepe velit veritatis vitae?\n' +
      '                Consectetur cum dolor doloremque ducimus error expedita, hic id ipsam non perspiciatis qui\n' +
      '                  recusandae reiciendis saepe sint voluptas. Eos harum minus necessitatibus nisi perspiciatis placeat\n' +
      '                  quis reprehenderit sunt tempore voluptatem?\n' +
      '                Atque beatae, earum iusto maiores odit officiis quidem veniam? Ab ad aut deleniti dignissimos eum\n' +
      '                  explicabo laboriosam non numquam officia, omnis placeat recusandae reiciendis repudiandae sapiente\n' +
      '                  similique soluta temporibus voluptatum.\n',
      recommendations: [
        {
          Author: 'Vasya',
          text: 'Очень удачная покупка. Я очень рад'
        },
        {
          Author: 'Аноним',
          text: 'Доболен'
        },
        {
          Author: 'Пузырёк',
          text: 'Лорен Ипсон Катался  на  этом  масле'
        },
        {
          Author: 'Лодаш',
          text: 'Очень удачная покупка. Я очень рад'
        },
        {
          Author: 'Реакт',
          text: 'Очень удачная покупка. Я очень рад'
        },
      ],
      getRating,
    },
    {
      id: 5,
      name: 'ATV-UTV',
      producer: 'MOTUL',
      type: 'bMassels',
      price: 3200,
      rating: [0, 0, 0, 0, 0],
      url: '/' + this.name + '/' + this.id,
      cardPhoto: './assets/picturesCard/300/Motol.jpeg',
      goodPhoto: './assets/picturesCard/large/MotolLarge.jpeg',
      srcForFrame: 'https://www.youtube.com/embed/tauZ9Zsvu-c',
      characteristics: ['Один', 'Два', 'Три', 'Непобедим', 'Температура замерзания -25 С', 'пятдесят', 'Сто сорок'],
      description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cupiditate deserunt expedita\n' +
      '                  fugiat illo laborum praesentium voluptatibus. Consectetur dolores illum magnam non quaerat quia\n' +
      '                  voluptas? Aliquid architecto eveniet ipsam voluptatem!\n' +
      '                A at, deleniti illo inventore iusto sint. Consequatur culpa dolor eius ex hic in inventore quaerat\n' +
      '                  reprehenderit vero voluptatem! Aliquid, consectetur rerum! Alias culpa deserunt exercitationem, itaque\n' +
      '                  nemo officia quisquam!\n' +
      '                Iste iure molestias nemo nisi quae sequi soluta vel? Adipisci ducimus ea eos, ex illum iure laborum\n' +
      '                  maiores, modi necessitatibus nisi nobis officia porro quod saepe voluptas? Accusantium, dolores,\n' +
      '                  voluptatum?\n' +
      '                A alias aliquid ipsum modi sequi. Accusantium architecto atque autem doloribus enim error facere\n' +
      '                  illum incidunt, ipsum nihil reiciendis, tenetur voluptates! Ab autem eum fugiat laboriosam magnam,\n' +
      '                  officiis repudiandae soluta?\n' +
      '                Dolores dolorum enim labore nam. Adipisci aliquid consectetur cumque delectus dicta eligendi est et\n' +
      '                  explicabo fugiat id illo in inventore magnam maiores nesciunt praesentium, quos recusandae saepe sequi\n' +
      '                  tempore ut!\n' +
      '                Corporis, culpa explicabo. Alias dolor dolore, dolores ducimus ea earum, error hic libero maiores\n' +
      '                  modi nam nihil nobis numquam omnis quia quibusdam quidem quod soluta sunt suscipit, velit vero\n' +
      '                  voluptate!\n' +
      '                A, consectetur deleniti eum iste nemo repudiandae voluptatum? Aperiam doloremque harum non possimus\n' +
      '                  quas. Aliquam assumenda consectetur consequuntur cumque eius expedita facilis id, incidunt, itaque\n' +
      '                  officia perspiciatis reiciendis voluptas voluptates.\n' +
      '                Asperiores commodi consectetur dolor dolore, dolores laudantium quas recusandae sapiente ut\n' +
      '                  voluptatem? Dolorem dolores error facilis harum id laborum quas reprehenderit veniam. Earum enim\n' +
      '                  facere harum maxime nihil rem sint!\n' +
      '                A aperiam blanditiis consectetur debitis deserunt dolorem doloribus ducimus ea earum error ex,\n' +
      '                  excepturi fugit id labore magni minus necessitatibus neque nesciunt nihil officia repellendus\n' +
      '                  similique tempore tenetur unde, voluptatem.\n' +
      '                Ab atque cumque cupiditate deleniti, facilis nisi quidem totam vel? A alias aliquid at blanditiis\n' +
      '                  deleniti dolorem dolores eaque enim fuga incidunt magnam molestias necessitatibus nihil omnis\n' +
      '                  possimus, saepe sint.\n' +
      '                Aut consequuntur dignissimos eaque nisi quas, quisquam? Aperiam corporis deserunt eveniet iusto\n' +
      '                  laborum mollitia nihil veritatis voluptate. Amet beatae facere magnam maiores, nesciunt quasi quis quo\n' +
      '                  saepe velit veritatis vitae?\n' +
      '                Consectetur cum dolor doloremque ducimus error expedita, hic id ipsam non perspiciatis qui\n' +
      '                  recusandae reiciendis saepe sint voluptas. Eos harum minus necessitatibus nisi perspiciatis placeat\n' +
      '                  quis reprehenderit sunt tempore voluptatem?\n' +
      '                Atque beatae, earum iusto maiores odit officiis quidem veniam? Ab ad aut deleniti dignissimos eum\n' +
      '                  explicabo laboriosam non numquam officia, omnis placeat recusandae reiciendis repudiandae sapiente\n' +
      '                  similique soluta temporibus voluptatum.\n',
      recommendations: [
        {
          Author: 'Vasya',
          text: 'Очень удачная покупка. Я очень рад'
        },
        {
          Author: 'Аноним',
          text: 'Доболен'
        },
        {
          Author: 'Пузырёк',
          text: 'Лорен Ипсон Катался  на  этом  масле'
        },
        {
          Author: 'Лодаш',
          text: 'Очень удачная покупка. Я очень рад'
        },
        {
          Author: 'Реакт',
          text: 'Очень удачная покупка. Я очень рад'
        },
      ],
      getRating,
    },
    {
      id: 6,
      name: 'OW-20',
      producer: 'TOYOTA',
      type: 'mMassels',
      price: 1000,
      rating: [0, 0, 0, 0, 0],
      url: '/' + this.name + '/' + this.id,
      cardPhoto: './assets/picturesCard/300/mMOWToyota.jpg',
      goodPhoto: './assets/picturesCard/large/ToyotaLarge.jpg',
      srcForFrame: 'https://www.youtube.com/embed/tauZ9Zsvu-c',
      characteristics: ['Один', 'Два', 'Три', 'Непобедим', 'Температура замерзания -25 С', 'пятдесят', 'Сто сорок'],
      description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cupiditate deserunt expedita\n' +
      '                  fugiat illo laborum praesentium voluptatibus. Consectetur dolores illum magnam non quaerat quia\n' +
      '                  voluptas? Aliquid architecto eveniet ipsam voluptatem!\n' +
      '                A at, deleniti illo inventore iusto sint. Consequatur culpa dolor eius ex hic in inventore quaerat\n' +
      '                  reprehenderit vero voluptatem! Aliquid, consectetur rerum! Alias culpa deserunt exercitationem, itaque\n' +
      '                  nemo officia quisquam!\n' +
      '                Iste iure molestias nemo nisi quae sequi soluta vel? Adipisci ducimus ea eos, ex illum iure laborum\n' +
      '                  maiores, modi necessitatibus nisi nobis officia porro quod saepe voluptas? Accusantium, dolores,\n' +
      '                  voluptatum?\n' +
      '                A alias aliquid ipsum modi sequi. Accusantium architecto atque autem doloribus enim error facere\n' +
      '                  illum incidunt, ipsum nihil reiciendis, tenetur voluptates! Ab autem eum fugiat laboriosam magnam,\n' +
      '                  officiis repudiandae soluta?\n' +
      '                Dolores dolorum enim labore nam. Adipisci aliquid consectetur cumque delectus dicta eligendi est et\n' +
      '                  explicabo fugiat id illo in inventore magnam maiores nesciunt praesentium, quos recusandae saepe sequi\n' +
      '                  tempore ut!\n' +
      '                Corporis, culpa explicabo. Alias dolor dolore, dolores ducimus ea earum, error hic libero maiores\n' +
      '                  modi nam nihil nobis numquam omnis quia quibusdam quidem quod soluta sunt suscipit, velit vero\n' +
      '                  voluptate!\n' +
      '                A, consectetur deleniti eum iste nemo repudiandae voluptatum? Aperiam doloremque harum non possimus\n' +
      '                  quas. Aliquam assumenda consectetur consequuntur cumque eius expedita facilis id, incidunt, itaque\n' +
      '                  officia perspiciatis reiciendis voluptas voluptates.\n' +
      '                Asperiores commodi consectetur dolor dolore, dolores laudantium quas recusandae sapiente ut\n' +
      '                  voluptatem? Dolorem dolores error facilis harum id laborum quas reprehenderit veniam. Earum enim\n' +
      '                  facere harum maxime nihil rem sint!\n' +
      '                A aperiam blanditiis consectetur debitis deserunt dolorem doloribus ducimus ea earum error ex,\n' +
      '                  excepturi fugit id labore magni minus necessitatibus neque nesciunt nihil officia repellendus\n' +
      '                  similique tempore tenetur unde, voluptatem.\n' +
      '                Ab atque cumque cupiditate deleniti, facilis nisi quidem totam vel? A alias aliquid at blanditiis\n' +
      '                  deleniti dolorem dolores eaque enim fuga incidunt magnam molestias necessitatibus nihil omnis\n' +
      '                  possimus, saepe sint.\n' +
      '                Aut consequuntur dignissimos eaque nisi quas, quisquam? Aperiam corporis deserunt eveniet iusto\n' +
      '                  laborum mollitia nihil veritatis voluptate. Amet beatae facere magnam maiores, nesciunt quasi quis quo\n' +
      '                  saepe velit veritatis vitae?\n' +
      '                Consectetur cum dolor doloremque ducimus error expedita, hic id ipsam non perspiciatis qui\n' +
      '                  recusandae reiciendis saepe sint voluptas. Eos harum minus necessitatibus nisi perspiciatis placeat\n' +
      '                  quis reprehenderit sunt tempore voluptatem?\n' +
      '                Atque beatae, earum iusto maiores odit officiis quidem veniam? Ab ad aut deleniti dignissimos eum\n' +
      '                  explicabo laboriosam non numquam officia, omnis placeat recusandae reiciendis repudiandae sapiente\n' +
      '                  similique soluta temporibus voluptatum.\n',
      recommendations: [
        {
          Author: 'Vasya',
          text: 'Очень удачная покупка. Я очень рад'
        },
        {
          Author: 'Аноним',
          text: 'Доболен'
        },
        {
          Author: 'Пузырёк',
          text: 'Лорен Ипсон Катался  на  этом  масле'
        },
        {
          Author: 'Лодаш',
          text: 'Очень удачная покупка. Я очень рад'
        },
        {
          Author: 'Реакт',
          text: 'Очень удачная покупка. Я очень рад'
        },
      ],
      getRating,
    },
    {
      id: 7,
      name: '5W-50',
      producer: 'Mobil1',
      type: 'mMassels',
      price: 2354,
      rating: [0, 0, 0, 0, 0],
      url: '/' + this.name + '/' + this.id,
      cardPhoto: './assets/picturesCard/300/Mobil1.jpg',
      goodPhoto: './assets/picturesCard/large/Mobil1Large.jpg',
      srcForFrame: 'https://www.youtube.com/embed/tauZ9Zsvu-c',
      characteristics: ['Один', 'Два', 'Три', 'Непобедим', 'Температура замерзания -25 С', 'пятдесят', 'Сто сорок'],
      description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cupiditate deserunt expedita\n' +
      '                  fugiat illo laborum praesentium voluptatibus. Consectetur dolores illum magnam non quaerat quia\n' +
      '                  voluptas? Aliquid architecto eveniet ipsam voluptatem!\n' +
      '                A at, deleniti illo inventore iusto sint. Consequatur culpa dolor eius ex hic in inventore quaerat\n' +
      '                  reprehenderit vero voluptatem! Aliquid, consectetur rerum! Alias culpa deserunt exercitationem, itaque\n' +
      '                  nemo officia quisquam!\n' +
      '                Iste iure molestias nemo nisi quae sequi soluta vel? Adipisci ducimus ea eos, ex illum iure laborum\n' +
      '                  maiores, modi necessitatibus nisi nobis officia porro quod saepe voluptas? Accusantium, dolores,\n' +
      '                  voluptatum?\n' +
      '                A alias aliquid ipsum modi sequi. Accusantium architecto atque autem doloribus enim error facere\n' +
      '                  illum incidunt, ipsum nihil reiciendis, tenetur voluptates! Ab autem eum fugiat laboriosam magnam,\n' +
      '                  officiis repudiandae soluta?\n' +
      '                Dolores dolorum enim labore nam. Adipisci aliquid consectetur cumque delectus dicta eligendi est et\n' +
      '                  explicabo fugiat id illo in inventore magnam maiores nesciunt praesentium, quos recusandae saepe sequi\n' +
      '                  tempore ut!\n' +
      '                Corporis, culpa explicabo. Alias dolor dolore, dolores ducimus ea earum, error hic libero maiores\n' +
      '                  modi nam nihil nobis numquam omnis quia quibusdam quidem quod soluta sunt suscipit, velit vero\n' +
      '                  voluptate!\n' +
      '                A, consectetur deleniti eum iste nemo repudiandae voluptatum? Aperiam doloremque harum non possimus\n' +
      '                  quas. Aliquam assumenda consectetur consequuntur cumque eius expedita facilis id, incidunt, itaque\n' +
      '                  officia perspiciatis reiciendis voluptas voluptates.\n' +
      '                Asperiores commodi consectetur dolor dolore, dolores laudantium quas recusandae sapiente ut\n' +
      '                  voluptatem? Dolorem dolores error facilis harum id laborum quas reprehenderit veniam. Earum enim\n' +
      '                  facere harum maxime nihil rem sint!\n' +
      '                A aperiam blanditiis consectetur debitis deserunt dolorem doloribus ducimus ea earum error ex,\n' +
      '                  excepturi fugit id labore magni minus necessitatibus neque nesciunt nihil officia repellendus\n' +
      '                  similique tempore tenetur unde, voluptatem.\n' +
      '                Ab atque cumque cupiditate deleniti, facilis nisi quidem totam vel? A alias aliquid at blanditiis\n' +
      '                  deleniti dolorem dolores eaque enim fuga incidunt magnam molestias necessitatibus nihil omnis\n' +
      '                  possimus, saepe sint.\n' +
      '                Aut consequuntur dignissimos eaque nisi quas, quisquam? Aperiam corporis deserunt eveniet iusto\n' +
      '                  laborum mollitia nihil veritatis voluptate. Amet beatae facere magnam maiores, nesciunt quasi quis quo\n' +
      '                  saepe velit veritatis vitae?\n' +
      '                Consectetur cum dolor doloremque ducimus error expedita, hic id ipsam non perspiciatis qui\n' +
      '                  recusandae reiciendis saepe sint voluptas. Eos harum minus necessitatibus nisi perspiciatis placeat\n' +
      '                  quis reprehenderit sunt tempore voluptatem?\n' +
      '                Atque beatae, earum iusto maiores odit officiis quidem veniam? Ab ad aut deleniti dignissimos eum\n' +
      '                  explicabo laboriosam non numquam officia, omnis placeat recusandae reiciendis repudiandae sapiente\n' +
      '                  similique soluta temporibus voluptatum.\n',
      recommendations: [
        {
          Author: 'Vasya',
          text: 'Очень удачная покупка. Я очень рад'
        },
        {
          Author: 'Аноним',
          text: 'Доболен'
        },
        {
          Author: 'Пузырёк',
          text: 'Лорен Ипсон Катался  на  этом  масле'
        },
        {
          Author: 'Лодаш',
          text: 'Очень удачная покупка. Я очень рад'
        },
        {
          Author: 'Реакт',
          text: 'Очень удачная покупка. Я очень рад'
        },
      ],
      getRating,
    },
    {
      id: 8,
      name: 'Compressor P100',
      producer: 'Unil',
      type: 'mMassels',
      price: 4444,
      rating: [0, 0, 0, 0, 0],
      url: '/' + this.name + '/' + this.id,
      cardPhoto: './assets/picturesCard/300/Farstone.jpeg',
      goodPhoto: './assets/picturesCard/300/FarstoneLarge.jpeg',
      srcForFrame: 'https://www.youtube.com/embed/tauZ9Zsvu-c',
      characteristics: ['Один', 'Два', 'Три', 'Непобедим', 'Температура замерзания -25 С', 'пятдесят', 'Сто сорок'],
      description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cupiditate deserunt expedita\n' +
      '                  fugiat illo laborum praesentium voluptatibus. Consectetur dolores illum magnam non quaerat quia\n' +
      '                  voluptas? Aliquid architecto eveniet ipsam voluptatem!\n' +
      '                A at, deleniti illo inventore iusto sint. Consequatur culpa dolor eius ex hic in inventore quaerat\n' +
      '                  reprehenderit vero voluptatem! Aliquid, consectetur rerum! Alias culpa deserunt exercitationem, itaque\n' +
      '                  nemo officia quisquam!\n' +
      '                Iste iure molestias nemo nisi quae sequi soluta vel? Adipisci ducimus ea eos, ex illum iure laborum\n' +
      '                  maiores, modi necessitatibus nisi nobis officia porro quod saepe voluptas? Accusantium, dolores,\n' +
      '                  voluptatum?\n' +
      '                A alias aliquid ipsum modi sequi. Accusantium architecto atque autem doloribus enim error facere\n' +
      '                  illum incidunt, ipsum nihil reiciendis, tenetur voluptates! Ab autem eum fugiat laboriosam magnam,\n' +
      '                  officiis repudiandae soluta?\n' +
      '                Dolores dolorum enim labore nam. Adipisci aliquid consectetur cumque delectus dicta eligendi est et\n' +
      '                  explicabo fugiat id illo in inventore magnam maiores nesciunt praesentium, quos recusandae saepe sequi\n' +
      '                  tempore ut!\n' +
      '                Corporis, culpa explicabo. Alias dolor dolore, dolores ducimus ea earum, error hic libero maiores\n' +
      '                  modi nam nihil nobis numquam omnis quia quibusdam quidem quod soluta sunt suscipit, velit vero\n' +
      '                  voluptate!\n' +
      '                A, consectetur deleniti eum iste nemo repudiandae voluptatum? Aperiam doloremque harum non possimus\n' +
      '                  quas. Aliquam assumenda consectetur consequuntur cumque eius expedita facilis id, incidunt, itaque\n' +
      '                  officia perspiciatis reiciendis voluptas voluptates.\n' +
      '                Asperiores commodi consectetur dolor dolore, dolores laudantium quas recusandae sapiente ut\n' +
      '                  voluptatem? Dolorem dolores error facilis harum id laborum quas reprehenderit veniam. Earum enim\n' +
      '                  facere harum maxime nihil rem sint!\n' +
      '                A aperiam blanditiis consectetur debitis deserunt dolorem doloribus ducimus ea earum error ex,\n' +
      '                  excepturi fugit id labore magni minus necessitatibus neque nesciunt nihil officia repellendus\n' +
      '                  similique tempore tenetur unde, voluptatem.\n' +
      '                Ab atque cumque cupiditate deleniti, facilis nisi quidem totam vel? A alias aliquid at blanditiis\n' +
      '                  deleniti dolorem dolores eaque enim fuga incidunt magnam molestias necessitatibus nihil omnis\n' +
      '                  possimus, saepe sint.\n' +
      '                Aut consequuntur dignissimos eaque nisi quas, quisquam? Aperiam corporis deserunt eveniet iusto\n' +
      '                  laborum mollitia nihil veritatis voluptate. Amet beatae facere magnam maiores, nesciunt quasi quis quo\n' +
      '                  saepe velit veritatis vitae?\n' +
      '                Consectetur cum dolor doloremque ducimus error expedita, hic id ipsam non perspiciatis qui\n' +
      '                  recusandae reiciendis saepe sint voluptas. Eos harum minus necessitatibus nisi perspiciatis placeat\n' +
      '                  quis reprehenderit sunt tempore voluptatem?\n' +
      '                Atque beatae, earum iusto maiores odit officiis quidem veniam? Ab ad aut deleniti dignissimos eum\n' +
      '                  explicabo laboriosam non numquam officia, omnis placeat recusandae reiciendis repudiandae sapiente\n' +
      '                  similique soluta temporibus voluptatum.\n',
      recommendations: [
      {
        Author: 'Vasya',
        text: 'Очень удачная покупка. Я очень рад'
      },
      {
        Author: 'Аноним',
        text: 'Доболен'
      },
      {
        Author: 'Пузырёк',
        text: 'Лорен Ипсон Катался  на  этом  масле'
      },
      {
        Author: 'Лодаш',
        text: 'Очень удачная покупка. Я очень рад'
      },
      {
        Author: 'Реакт',
        text: 'Очень удачная покупка. Я очень рад'
      },
    ],
      getRating,
    },
    {
      id: 9,
      name: '5W-30',
      producer: 'Lucoil',
      type: 'mMassels',
      price: 1503,
      rating: [0, 0, 0, 0, 0],
      url: '/' + this.name + '/' + this.id,
      cardPhoto: './assets/picturesCard/300/lucoile.jpeg',
      goodPhoto: './assets/picturesCard/large/lucoileLarge.jpeg',
      srcForFrame: 'https://www.youtube.com/embed/tauZ9Zsvu-c',
      characteristics: ['Один', 'Два', 'Три', 'Непобедим', 'Температура замерзания -25 С', 'пятдесят', 'Сто сорок'],
      description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cupiditate deserunt expedita\n' +
      '                  fugiat illo laborum praesentium voluptatibus. Consectetur dolores illum magnam non quaerat quia\n' +
      '                  voluptas? Aliquid architecto eveniet ipsam voluptatem!\n' +
      '                A at, deleniti illo inventore iusto sint. Consequatur culpa dolor eius ex hic in inventore quaerat\n' +
      '                  reprehenderit vero voluptatem! Aliquid, consectetur rerum! Alias culpa deserunt exercitationem, itaque\n' +
      '                  nemo officia quisquam!\n' +
      '                Iste iure molestias nemo nisi quae sequi soluta vel? Adipisci ducimus ea eos, ex illum iure laborum\n' +
      '                  maiores, modi necessitatibus nisi nobis officia porro quod saepe voluptas? Accusantium, dolores,\n' +
      '                  voluptatum?\n' +
      '                A alias aliquid ipsum modi sequi. Accusantium architecto atque autem doloribus enim error facere\n' +
      '                  illum incidunt, ipsum nihil reiciendis, tenetur voluptates! Ab autem eum fugiat laboriosam magnam,\n' +
      '                  officiis repudiandae soluta?\n' +
      '                Dolores dolorum enim labore nam. Adipisci aliquid consectetur cumque delectus dicta eligendi est et\n' +
      '                  explicabo fugiat id illo in inventore magnam maiores nesciunt praesentium, quos recusandae saepe sequi\n' +
      '                  tempore ut!\n' +
      '                Corporis, culpa explicabo. Alias dolor dolore, dolores ducimus ea earum, error hic libero maiores\n' +
      '                  modi nam nihil nobis numquam omnis quia quibusdam quidem quod soluta sunt suscipit, velit vero\n' +
      '                  voluptate!\n' +
      '                A, consectetur deleniti eum iste nemo repudiandae voluptatum? Aperiam doloremque harum non possimus\n' +
      '                  quas. Aliquam assumenda consectetur consequuntur cumque eius expedita facilis id, incidunt, itaque\n' +
      '                  officia perspiciatis reiciendis voluptas voluptates.\n' +
      '                Asperiores commodi consectetur dolor dolore, dolores laudantium quas recusandae sapiente ut\n' +
      '                  voluptatem? Dolorem dolores error facilis harum id laborum quas reprehenderit veniam. Earum enim\n' +
      '                  facere harum maxime nihil rem sint!\n' +
      '                A aperiam blanditiis consectetur debitis deserunt dolorem doloribus ducimus ea earum error ex,\n' +
      '                  excepturi fugit id labore magni minus necessitatibus neque nesciunt nihil officia repellendus\n' +
      '                  similique tempore tenetur unde, voluptatem.\n' +
      '                Ab atque cumque cupiditate deleniti, facilis nisi quidem totam vel? A alias aliquid at blanditiis\n' +
      '                  deleniti dolorem dolores eaque enim fuga incidunt magnam molestias necessitatibus nihil omnis\n' +
      '                  possimus, saepe sint.\n' +
      '                Aut consequuntur dignissimos eaque nisi quas, quisquam? Aperiam corporis deserunt eveniet iusto\n' +
      '                  laborum mollitia nihil veritatis voluptate. Amet beatae facere magnam maiores, nesciunt quasi quis quo\n' +
      '                  saepe velit veritatis vitae?\n' +
      '                Consectetur cum dolor doloremque ducimus error expedita, hic id ipsam non perspiciatis qui\n' +
      '                  recusandae reiciendis saepe sint voluptas. Eos harum minus necessitatibus nisi perspiciatis placeat\n' +
      '                  quis reprehenderit sunt tempore voluptatem?\n' +
      '                Atque beatae, earum iusto maiores odit officiis quidem veniam? Ab ad aut deleniti dignissimos eum\n' +
      '                  explicabo laboriosam non numquam officia, omnis placeat recusandae reiciendis repudiandae sapiente\n' +
      '                  similique soluta temporibus voluptatum.\n',
      recommendations: [
        {
          Author: 'Vasya',
          text: 'Очень удачная покупка. Я очень рад'
        },
        {
          Author: 'Аноним',
          text: 'Доболен'
        },
        {
          Author: 'Пузырёк',
          text: 'Лорен Ипсон Катался  на  этом  масле'
        },
        {
          Author: 'Лодаш',
          text: 'Очень удачная покупка. Я очень рад'
        },
        {
          Author: 'Реакт',
          text: 'Очень удачная покупка. Я очень рад'
        },
      ],
      getRating,
    },
    {
      id: 10,
      name: 'Dynamic 10W-50',
      producer: 'Moto-4T',
      type: 'gMassels',
      price: 3333,
      rating: [0, 0, 0, 0, 0],
      url: '/' + this.name + '/' + this.id,
      cardPhoto: './assets/picturesCard/300/Dynamic2.jpeg',
      goodPhoto: './assets/picturesCard/large/Dynamic2Large.jpeg',
      srcForFrame: 'https://www.youtube.com/embed/tauZ9Zsvu-c',
      characteristics: ['Один', 'Два', 'Три', 'Непобедим', 'Температура замерзания -25 С', 'пятдесят', 'Сто сорок'],
      description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cupiditate deserunt expedita\n' +
      '                  fugiat illo laborum praesentium voluptatibus. Consectetur dolores illum magnam non quaerat quia\n' +
      '                  voluptas? Aliquid architecto eveniet ipsam voluptatem!\n' +
      '                A at, deleniti illo inventore iusto sint. Consequatur culpa dolor eius ex hic in inventore quaerat\n' +
      '                  reprehenderit vero voluptatem! Aliquid, consectetur rerum! Alias culpa deserunt exercitationem, itaque\n' +
      '                  nemo officia quisquam!\n' +
      '                Iste iure molestias nemo nisi quae sequi soluta vel? Adipisci ducimus ea eos, ex illum iure laborum\n' +
      '                  maiores, modi necessitatibus nisi nobis officia porro quod saepe voluptas? Accusantium, dolores,\n' +
      '                  voluptatum?\n' +
      '                A alias aliquid ipsum modi sequi. Accusantium architecto atque autem doloribus enim error facere\n' +
      '                  illum incidunt, ipsum nihil reiciendis, tenetur voluptates! Ab autem eum fugiat laboriosam magnam,\n' +
      '                  officiis repudiandae soluta?\n' +
      '                Dolores dolorum enim labore nam. Adipisci aliquid consectetur cumque delectus dicta eligendi est et\n' +
      '                  explicabo fugiat id illo in inventore magnam maiores nesciunt praesentium, quos recusandae saepe sequi\n' +
      '                  tempore ut!\n' +
      '                Corporis, culpa explicabo. Alias dolor dolore, dolores ducimus ea earum, error hic libero maiores\n' +
      '                  modi nam nihil nobis numquam omnis quia quibusdam quidem quod soluta sunt suscipit, velit vero\n' +
      '                  voluptate!\n' +
      '                A, consectetur deleniti eum iste nemo repudiandae voluptatum? Aperiam doloremque harum non possimus\n' +
      '                  quas. Aliquam assumenda consectetur consequuntur cumque eius expedita facilis id, incidunt, itaque\n' +
      '                  officia perspiciatis reiciendis voluptas voluptates.\n' +
      '                Asperiores commodi consectetur dolor dolore, dolores laudantium quas recusandae sapiente ut\n' +
      '                  voluptatem? Dolorem dolores error facilis harum id laborum quas reprehenderit veniam. Earum enim\n' +
      '                  facere harum maxime nihil rem sint!\n' +
      '                A aperiam blanditiis consectetur debitis deserunt dolorem doloribus ducimus ea earum error ex,\n' +
      '                  excepturi fugit id labore magni minus necessitatibus neque nesciunt nihil officia repellendus\n' +
      '                  similique tempore tenetur unde, voluptatem.\n' +
      '                Ab atque cumque cupiditate deleniti, facilis nisi quidem totam vel? A alias aliquid at blanditiis\n' +
      '                  deleniti dolorem dolores eaque enim fuga incidunt magnam molestias necessitatibus nihil omnis\n' +
      '                  possimus, saepe sint.\n' +
      '                Aut consequuntur dignissimos eaque nisi quas, quisquam? Aperiam corporis deserunt eveniet iusto\n' +
      '                  laborum mollitia nihil veritatis voluptate. Amet beatae facere magnam maiores, nesciunt quasi quis quo\n' +
      '                  saepe velit veritatis vitae?\n' +
      '                Consectetur cum dolor doloremque ducimus error expedita, hic id ipsam non perspiciatis qui\n' +
      '                  recusandae reiciendis saepe sint voluptas. Eos harum minus necessitatibus nisi perspiciatis placeat\n' +
      '                  quis reprehenderit sunt tempore voluptatem?\n' +
      '                Atque beatae, earum iusto maiores odit officiis quidem veniam? Ab ad aut deleniti dignissimos eum\n' +
      '                  explicabo laboriosam non numquam officia, omnis placeat recusandae reiciendis repudiandae sapiente\n' +
      '                  similique soluta temporibus voluptatum.\n',
      recommendations: [
        {
          Author: 'Vasya',
          text: 'Очень удачная покупка. Я очень рад'
        },
        {
          Author: 'Аноним',
          text: 'Доболен'
        },
        {
          Author: 'Пузырёк',
          text: 'Лорен Ипсон Катался  на  этом  масле'
        },
        {
          Author: 'Лодаш',
          text: 'Очень удачная покупка. Я очень рад'
        },
        {
          Author: 'Реакт',
          text: 'Очень удачная покупка. Я очень рад'
        },
      ],
      getRating,
    }
  ],
  contacts: {
    Address: 'м. Киев, ул. Шевченка',
    eMail: 'example@ukr.net',
    phone: '+3806799999999',
    director: 'Степан Богданович Новоcельцев',
    managers: 'Степаненко А. В., Валериан П. С.'
  }
};
