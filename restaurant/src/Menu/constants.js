//Helpful mapping for category states 
const dictMenuItems = [
    {
        id : 1,
        category : 'lasagna',
        color : 'bg-green-400',
        img : '/public/images/lasagna1.jpg',
        title : 'Meaty Sauce Lasagna',
        ingredients : {
            'Lasagna noodles' : 'https://cdn-icons.flaticon.com/png/512/4147/premium/4147686.png?token=exp=1637248484~hmac=9315ae2c8a70b7b3a905575257ba0f63', 
            'Ground beef' : 'https://cdn-icons-png.flaticon.com/512/4259/4259862.png', 
            'Ricotta cheese' : 'https://cdn-icons.flaticon.com/png/512/5713/premium/5713772.png?token=exp=1637248617~hmac=1254a176e27bb1727630bf6c47b9da3f', 
            'Parmesan cheese' : 'https://cdn-icons.flaticon.com/png/512/4076/premium/4076791.png?token=exp=1637248638~hmac=d0acb62a26ca1f9709296e676fa85e33',
            'Tomatoes' : 'https://cdn-icons-png.flaticon.com/512/6135/6135673.png', 
            'Olive oil' : 'https://cdn-icons.flaticon.com/png/512/4374/premium/4374419.png?token=exp=1637248729~hmac=f8e9d6b7e2405046fc889b258308fafe', 
            'Cayenne pepper' : 'https://cdn-icons-png.flaticon.com/512/700/700933.png', 
            'Tomato paste' : 'https://cdn-icons-png.flaticon.com/512/1919/1919239.png'
        },
        price : 5.50,
        quantity : 400
    },
    {
        id : 2,
        category : 'spaghetti',
        color : 'bg-blue-400',
        img : '/public/images/spaghetti1.jpg',
        title : 'Garlic Spaghetti',
        ingredients : {
            'Spaghetti' : 'https://cdn-icons-png.flaticon.com/512/135/135388.png', 
            'Garlic' : 'https://cdn-icons-png.flaticon.com/512/1759/1759618.png', 
            'Parmesan cheese' : 'https://cdn-icons.flaticon.com/png/512/4076/premium/4076791.png?token=exp=1637248638~hmac=d0acb62a26ca1f9709296e676fa85e33',
            'Red pepper' : 'https://cdn-icons-png.flaticon.com/512/883/883661.png', 
            'Parsley' : 'https://cdn-icons-png.flaticon.com/512/1407/1407346.png', 
            'Olive oil' : 'https://cdn-icons.flaticon.com/png/512/4374/premium/4374419.png?token=exp=1637248729~hmac=f8e9d6b7e2405046fc889b258308fafe'
        },
        price : 7.50,
        quantity : 250
    },
    {
        id : 3,
        category : 'farfalle',
        color : 'bg-yellow-400',
        img : '/public/images/farfalle1.jpg',
        title : 'Sausage & Asparagus Farfalle',
        ingredients : {
            'Bow ties' : 'https://cdn-icons.flaticon.com/png/512/4147/premium/4147555.png?token=exp=1637251444~hmac=1907c1aa671d9362e3fe197b9d73c50c', 
            'Asparagus' : 'https://cdn-icons-png.flaticon.com/512/681/681047.png', 
            'Turkey sausage' : 'https://cdn-icons-png.flaticon.com/512/601/601977.png',
            'Onion' : 'https://cdn-icons.flaticon.com/png/512/395/premium/395297.png?token=exp=1637251622~hmac=6e9e3b87e72b51097f4b9cb30c524527', 
            'Garlic' : 'https://cdn-icons-png.flaticon.com/512/1759/1759618.png', 
            'Olive oil' : 'https://cdn-icons.flaticon.com/png/512/4374/premium/4374419.png?token=exp=1637248729~hmac=f8e9d6b7e2405046fc889b258308fafe',
            'Tomato paste' : 'https://cdn-icons-png.flaticon.com/512/1919/1919239.png',
            'Tomatoes' : 'https://cdn-icons-png.flaticon.com/512/6135/6135673.png'

        },
        price : 6.00,
        quantity : 200
    },
    {
        id : 4,
        category : 'lasagna',
        color : 'bg-green-400',
        img : '/public/images/lasagna2.jpg',
        title : 'Lobster Lasagna',
        ingredients : {
            'Lasagna noodles' : 'https://cdn-icons.flaticon.com/png/512/4147/premium/4147686.png?token=exp=1637248484~hmac=9315ae2c8a70b7b3a905575257ba0f63',
            'Lobster meat' : 'https://cdn-icons-png.flaticon.com/512/1748/1748199.png', 
            'Ricotta cheese' : 'https://cdn-icons.flaticon.com/png/512/5713/premium/5713772.png?token=exp=1637248617~hmac=1254a176e27bb1727630bf6c47b9da3f', 
            'Mascarpone' : 'https://cdn-icons-png.flaticon.com/512/2427/2427255.png',
            'Garlic' : 'https://cdn-icons-png.flaticon.com/512/1759/1759618.png', 
            'Olive oil' : 'https://cdn-icons.flaticon.com/png/512/4374/premium/4374419.png?token=exp=1637248729~hmac=f8e9d6b7e2405046fc889b258308fafe',
            'Tomato paste' : 'https://cdn-icons-png.flaticon.com/512/1919/1919239.png',
            'White wine' : 'https://cdn-icons.flaticon.com/png/512/2596/premium/2596760.png?token=exp=1637252592~hmac=e89e87d435311702168f6dc6182dda84'
        },
        price : 15.00,
        quantity : 400
    },
    {
        id : 5,
        category : 'macaroni',
        color : 'bg-pink-400',
        img : '/public/images/macaroni1.jpg',
        title : 'Mac and Cheese',
        ingredients : {
            'Macaroni noodles' : 'https://cdn-icons.flaticon.com/png/512/3105/premium/3105020.png?token=exp=1637266011~hmac=46bb087926e945c128f23f45a75a2418', 
            'Cheddar' : 'https://cdn-icons.flaticon.com/png/512/3340/premium/3340494.png?token=exp=1637266093~hmac=200e415a06dd15f3fa924402a9e784ae', 
            'Parmesan cheese' : 'https://cdn-icons.flaticon.com/png/512/4076/premium/4076791.png?token=exp=1637248638~hmac=d0acb62a26ca1f9709296e676fa85e33',
            'Butter' : 'https://cdn-icons-png.flaticon.com/512/3348/3348097.png', 
            'Milk' : 'https://cdn-icons-png.flaticon.com/512/851/851674.png', 
            'Cinnamon' : 'https://cdn-icons.flaticon.com/png/512/3151/premium/3151748.png?token=exp=1637266374~hmac=49434fa8621431bdfbb218e73300dc9a'
        },
        price : 7.50,
        quantity : 500
    },
    {
        id : 6,
        category : 'macaroni',
        color : 'bg-pink-400',
        img : '/public/images/macaroni2.jpg',
        title : 'Tuna and Beans Macaroni',
        ingredients : {
            'Macaroni noodles' : 'https://cdn-icons.flaticon.com/png/512/3105/premium/3105020.png?token=exp=1637266011~hmac=46bb087926e945c128f23f45a75a2418',
            'Tuna' : 'https://cdn-icons-png.flaticon.com/512/385/385190.png', 
            'Cheddar' : 'https://cdn-icons.flaticon.com/png/512/3340/premium/3340494.png?token=exp=1637266093~hmac=200e415a06dd15f3fa924402a9e784ae',
            'Onion' : 'https://cdn-icons.flaticon.com/png/512/395/premium/395297.png?token=exp=1637251622~hmac=6e9e3b87e72b51097f4b9cb30c524527',
            'Eggs' : 'https://cdn-icons.flaticon.com/png/512/2530/premium/2530585.png?token=exp=1637267157~hmac=65d653a7d9e620de65252275613596a0', 
            'Mayo' : 'https://cdn-icons.flaticon.com/png/512/3375/premium/3375976.png?token=exp=1637267176~hmac=4ce16636e25ae1f943d379f440150bfe'
        },
        price : 10.00,
        quantity : 320
    },
    {
        id : 7,
        category : 'spaghetti',
        color : 'bg-blue-400',
        img : '/public/images/spaghetti2.jpg',
        title : 'Creamy Spaghetti Carbonara',
        ingredients : {
            'Spaghetti' : 'https://cdn-icons-png.flaticon.com/512/135/135388.png',
            'Bacon' : 'https://cdn-icons-png.flaticon.com/512/1582/1582218.png', 
            'Parmesan cheese' : 'https://cdn-icons.flaticon.com/png/512/4076/premium/4076791.png?token=exp=1637248638~hmac=d0acb62a26ca1f9709296e676fa85e33',
            'Heavy cream' : 'https://cdn-icons-png.flaticon.com/512/3148/3148653.png',
            'Egg yolks' : 'https://cdn-icons.flaticon.com/png/512/5263/premium/5263270.png?token=exp=1637267603~hmac=535e2830f8f2be23cc1ed26d91642621', 
            'Olive oil' : 'https://cdn-icons.flaticon.com/png/512/4374/premium/4374419.png?token=exp=1637248729~hmac=f8e9d6b7e2405046fc889b258308fafe'
        },
        price : 5.00,
        quantity : 250
    },
    {
        id : 8,
        category : 'farfalle',
        color : 'bg-yellow-400',
        img : '/public/images/farfalle2.jpg',
        title : 'Spring Pasta Salad',
        ingredients : {
            'Bow ties' : 'https://cdn-icons.flaticon.com/png/512/4147/premium/4147555.png?token=exp=1637251444~hmac=1907c1aa671d9362e3fe197b9d73c50c',
            'Asparagus' : 'https://cdn-icons-png.flaticon.com/512/681/681047.png', 
            'Spinach' : 'https://cdn-icons-png.flaticon.com/512/2503/2503928.png',
            'Peas' : 'https://cdn-icons.flaticon.com/png/512/2346/premium/2346963.png?token=exp=1637268928~hmac=82acaffd5490ffbe14a428ce47db400e',
            'Basil' : 'https://cdn-icons-png.flaticon.com/512/1135/1135427.png',
            'Parmesan cheese' : 'https://cdn-icons.flaticon.com/png/512/4076/premium/4076791.png?token=exp=1637248638~hmac=d0acb62a26ca1f9709296e676fa85e33',
            'Artichoke' : 'https://cdn-icons.flaticon.com/png/512/3585/premium/3585093.png?token=exp=1637269077~hmac=cb7c6aad2cbe10ba7215a5f136c156ca',
            'Olive oil' : 'https://cdn-icons.flaticon.com/png/512/4374/premium/4374419.png?token=exp=1637248729~hmac=f8e9d6b7e2405046fc889b258308fafe'
        },
        price : 10.25,
        quantity : 300
    },
    {
        id : 9,
        category : 'farfalle',
        color : 'bg-yellow-400',
        img : '/public/images/farfalle3.jpg',
        title : 'Caprese Farfalle',
        ingredients : {
            'Bow ties' : 'https://cdn-icons.flaticon.com/png/512/4147/premium/4147555.png?token=exp=1637251444~hmac=1907c1aa671d9362e3fe197b9d73c50c',
            'Balsamic vinegar' : 'https://cdn-icons-png.flaticon.com/512/1919/1919606.png', 
            'Mozzarella' : 'https://cdn-icons.flaticon.com/png/512/4713/premium/4713854.png?token=exp=1637269453~hmac=280fddc264790a2e6be984229a67e3ff',
            'Basil' : 'https://cdn-icons-png.flaticon.com/512/1135/1135427.png',
            'Tomatoes' : 'https://cdn-icons-png.flaticon.com/512/6135/6135673.png',
            'Red pepper' : 'https://cdn-icons-png.flaticon.com/512/883/883661.png'
        },
        price : 6.50,
        quantity : 250
    },
    {
        id : 10,
        category : 'spaghetti',
        color : 'bg-blue-400',
        img : '/public/images/spaghetti3.jpg',
        title : 'Chicken Spaghetti',
        ingredients : {
            'Spaghetti' : 'https://cdn-icons-png.flaticon.com/512/135/135388.png',
            'Chicken breast' : 'https://cdn-icons-png.flaticon.com/512/5571/5571943.png', 
            'Mushrooms' : 'https://cdn-icons-png.flaticon.com/512/4416/4416776.png',
            'Parmesan cheese' : 'https://cdn-icons.flaticon.com/png/512/4076/premium/4076791.png?token=exp=1637248638~hmac=d0acb62a26ca1f9709296e676fa85e33', 
            'Tomato paste' : 'https://cdn-icons-png.flaticon.com/512/1919/1919239.png',
            'Olive oil' : 'https://cdn-icons.flaticon.com/png/512/4374/premium/4374419.png?token=exp=1637248729~hmac=f8e9d6b7e2405046fc889b258308fafe'
        },
        price : 7.50,
        quantity : 400
    },
    {
        id : 11,
        category : 'lasagna',
        color : 'bg-green-400',
        img : '/public/images/lasagna3.jpg',
        title : 'Sauceless Garden Lasagna',
        ingredients : {
            'Lasagna noodles' : 'https://cdn-icons.flaticon.com/png/512/4147/premium/4147686.png?token=exp=1637248484~hmac=9315ae2c8a70b7b3a905575257ba0f63',
            'Mozzarella' : 'https://cdn-icons.flaticon.com/png/512/4713/premium/4713854.png?token=exp=1637269453~hmac=280fddc264790a2e6be984229a67e3ff', 
            'Onion' : 'https://cdn-icons.flaticon.com/png/512/395/premium/395297.png?token=exp=1637251622~hmac=6e9e3b87e72b51097f4b9cb30c524527', 
            'Mushrooms' : 'https://cdn-icons-png.flaticon.com/512/4416/4416776.png',
            'Spinach' : 'https://cdn-icons-png.flaticon.com/512/2503/2503928.png',
            'Oregano' : 'https://cdn-icons-png.flaticon.com/512/4139/4139366.png',
            'Zucchini' : 'https://cdn-icons-png.flaticon.com/512/1135/1135411.png',
            'Olive oil' : 'https://cdn-icons.flaticon.com/png/512/4374/premium/4374419.png?token=exp=1637248729~hmac=f8e9d6b7e2405046fc889b258308fafe'
        },
        price : 10.00,
        quantity : 600
    },
    {
        id : 12,
        category : 'macaroni',
        color : 'bg-pink-400',
        img : '/public/images/macaroni3.jpg',
        title : 'Vegan Mac and Cheese',
        ingredients : {
            'Macaroni noodles' : 'https://cdn-icons.flaticon.com/png/512/3105/premium/3105020.png?token=exp=1637266011~hmac=46bb087926e945c128f23f45a75a2418',
            'Coconut milk' : 'https://cdn-icons-png.flaticon.com/512/5015/5015518.png', 
            'Garlic' : 'https://cdn-icons-png.flaticon.com/512/1759/1759618.png', 
            'Brocoli' : 'https://cdn-icons-png.flaticon.com/512/2224/2224232.png', 
            'Paprika' : 'https://cdn-icons.flaticon.com/png/512/2046/premium/2046578.png?token=exp=1637270863~hmac=3f4cd3d8b8b63a9d0400c5f46a427a52',
            'Olive oil' : 'https://cdn-icons.flaticon.com/png/512/4374/premium/4374419.png?token=exp=1637248729~hmac=f8e9d6b7e2405046fc889b258308fafe'
        },
        price : 3.50,
        quantity : 300
    },
    {
        id : 13,
        category : 'spaghetti',
        color : 'bg-blue-400',
        img : '/public/images/spaghetti4.jpg',
        title : 'Tuna and Mushroom Spaghetti',
        ingredients : {
            'Spaghetti' : 'https://cdn-icons-png.flaticon.com/512/135/135388.png',
            'Tuna' : 'https://cdn-icons-png.flaticon.com/512/385/385190.png', 
            'Mushrooms' : 'https://cdn-icons-png.flaticon.com/512/4416/4416776.png',
            'Heavy cream' : 'https://cdn-icons-png.flaticon.com/512/3148/3148653.png',
            'Oregano' : 'https://cdn-icons-png.flaticon.com/512/4139/4139366.png',
            'Olive oil' : 'https://cdn-icons.flaticon.com/png/512/4374/premium/4374419.png?token=exp=1637248729~hmac=f8e9d6b7e2405046fc889b258308fafe',
        },
        price : 8.50,
        quantity : 300
    },
    {
        id : 14,
        category : 'farfalle',
        color : 'bg-yellow-400',
        img : '/public/images/farfalle4.jpg',
        title : 'Seafood Farfalle',
        ingredients : {
            'Bow ties' : 'https://cdn-icons.flaticon.com/png/512/4147/premium/4147555.png?token=exp=1637251444~hmac=1907c1aa671d9362e3fe197b9d73c50c',
            'Lobster meat' : 'https://cdn-icons-png.flaticon.com/512/1748/1748199.png', 
            'Shells' : 'https://cdn-icons.flaticon.com/png/512/4469/premium/4469196.png?token=exp=1637272880~hmac=f5f886742b3789c582c242d7d4504e73',
            'Squid' : 'https://cdn-icons-png.flaticon.com/512/1276/1276330.png',
            'Garlic' : 'https://cdn-icons-png.flaticon.com/512/1759/1759618.png',
            'Tomatoes' : 'https://cdn-icons-png.flaticon.com/512/6135/6135673.png', 
            'Brocoli' : 'https://cdn-icons-png.flaticon.com/512/2224/2224232.png', 
            'Olive oil' : 'https://cdn-icons.flaticon.com/png/512/4374/premium/4374419.png?token=exp=1637248729~hmac=f8e9d6b7e2405046fc889b258308fafe',
        },
        price : 20.00,
        quantity : 300
    },
    {
        id : 15,
        category : 'lasagna',
        color : 'bg-green-400',
        img : '/public/images/lasagna4.jpg',
        title : 'White Cheese Chicken Lasagna',
        ingredients : {
            'Lasagna noodles' : 'https://cdn-icons.flaticon.com/png/512/4147/premium/4147686.png?token=exp=1637248484~hmac=9315ae2c8a70b7b3a905575257ba0f63',
            'Mozzarella' : 'https://cdn-icons.flaticon.com/png/512/4713/premium/4713854.png?token=exp=1637269453~hmac=280fddc264790a2e6be984229a67e3ff', 
            'Parmesan cheese' : 'https://cdn-icons.flaticon.com/png/512/4076/premium/4076791.png?token=exp=1637248638~hmac=d0acb62a26ca1f9709296e676fa85e33',
            'Milk' : 'https://cdn-icons-png.flaticon.com/512/851/851674.png', 
            'Heavy cream' : 'https://cdn-icons-png.flaticon.com/512/3148/3148653.png',
            'Chicken meat' : 'https://cdn-icons.flaticon.com/png/512/3004/premium/3004981.png?token=exp=1637273234~hmac=23c269fe01619dd93b1363411a186a80',
            'Spinach' : 'https://cdn-icons-png.flaticon.com/512/2503/2503928.png',
            'Tomato paste' : 'https://cdn-icons-png.flaticon.com/512/1919/1919239.png'
        },
        price : 30.00,
        quantity : 1000
    },
    {
        id : 16,
        category : 'macaroni',
        color : 'bg-pink-400',
        img : '/public/images/macaroni4.jpg',
        title : 'Crab Mac and Cheese',
        ingredients : {
            'Macaroni noodles' : 'https://cdn-icons.flaticon.com/png/512/3105/premium/3105020.png?token=exp=1637266011~hmac=46bb087926e945c128f23f45a75a2418',
            'Milk' : 'https://cdn-icons-png.flaticon.com/512/851/851674.png', 
            'Cheddar' : 'https://cdn-icons.flaticon.com/png/512/3340/premium/3340494.png?token=exp=1637266093~hmac=200e415a06dd15f3fa924402a9e784ae', 
            'Mozzarella' : 'https://cdn-icons.flaticon.com/png/512/4713/premium/4713854.png?token=exp=1637269453~hmac=280fddc264790a2e6be984229a67e3ff',
            'Heavy cream' : 'https://cdn-icons-png.flaticon.com/512/3148/3148653.png',
            'Oregano' : 'https://cdn-icons-png.flaticon.com/512/4139/4139366.png',
            'Crab' : 'https://cdn-icons-png.flaticon.com/512/427/427395.png',
            'Olive oil' : 'https://cdn-icons.flaticon.com/png/512/4374/premium/4374419.png?token=exp=1637248729~hmac=f8e9d6b7e2405046fc889b258308fafe'
        },
        price : 15.00,
        quantity : 300
    },
]

export default dictMenuItems;