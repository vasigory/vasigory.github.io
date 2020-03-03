(function () {
    var global = this;
   const canvas = document.querySelector('#c');
    var THREE = global.THREE,
        requestAnimationFrame = global.requestAnimationFrame;
       var options = {
  velx: 0,
  vely: 0,
  camera: {
    speed: 0.0001
  },
  
  back: function() {
    this.velx = 0.1;
    this.vely = 0.1;
    
     window.location.href = "/"
  }
};
    
//Переменные для работы с сценой
    var renderer, scene, camera, controls, light, material;
//Переменные планет
    var theSun, mercury, venus, earth, mars, asteroidBelt, jupiter, saturn, saturnRing, uranus, neptune;

    // Размер планеты/солнцп = 100,000km : 50 units (солнце ~696342km r = размер солнца = 348.15)
    // AU = 150 mil km : 50 units
    
    var AU = 50;

    var sunSize = 348.15;


// Информация о Меркурии
    var mercurySize = 1.2,
        mercuryOrbitRadius = sunSize + (AU * 1),
        mercuryOrbitAngle = getRandomArbitrary(0, 360),
        mercuryOrbitSpeed = 0.08,
        mercuryRotateSpeed = 0.05;
 // Информация о Венере
    var venusSize = 3,
        venusOrbitRadius = sunSize + (AU * 1.7),
        venusOrbitAngle = getRandomArbitrary(0, 360),
        venusOrbitSpeed = 0.07,
        venusRotateSpeed = 0.05;
// Информация о Земле
    var earthSize = 3,
        earthOrbitRadius = sunSize + (AU * 3),
        earthOrbitAngle = getRandomArbitrary(0, 360),
        earthOrbitSpeed = 0.06,
        earthRotateSpeed = 0.05;
// Информация о Марсе
    var marsSize = 1.6,
        marsOrbitRadius = sunSize + (AU * 4.8),
        marsOrbitAngle = getRandomArbitrary(0, 360),
        marsOrbitSpeed = 0.048,
        marsRotateSpeed = 0.05;
 // Информация о Юпитер
    var jupiterSize = 34.99,
        jupiterOrbitRadius = sunSize + (AU * 5.5),
        jupiterOrbitAngle = getRandomArbitrary(0, 360),
        jupiterOrbitSpeed = 0.026,
        jupiterRotateSpeed = 0.05;
 // Информация о Сатурне
    var saturnSize = 29.1,
        saturnOrbitRadius = sunSize + (AU * 9.5),
        saturnOrbitAngle = getRandomArbitrary(0, 360),
        saturnOrbitSpeed = 0.018,
        saturnRotateSpeed = 0.05;
// Информация о кольцах Сатурна
    var saturnRingStart = saturnSize + 3.3,
        saturnRingEnd = saturnSize + 60;
// Информация о Уране
    var uranusSize = 12.7,
        uranusOrbitRadius = sunSize + (AU * 19.2),
        uranusRotateSpeed = 0.05;
// Информация о кольцах Урана
    var uranusRingStart = uranusSize + 3,
        uranusRingEnd = uranusSize + 40;
// Информация о Нептуне
    var neptuneSize = 12.3,
        neptuneOrbitRadius = sunSize + (AU * 30.1),
        neptuneOrbitAngle = getRandomArbitrary(0, 360),
        neptuneOrbitSpeed = 0.01,
        neptuneRotateSpeed = 0.05;
    
    var WIDTH = window.innerWidth,
        HEIGHT = window.innerHeight;


    init();
    animate();

    function init() {
    	//создаём сцену
        scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x000000, 0.00008);
        //создаём камеру
        camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 100000);
        camera.position.z = 2000;

        renderer = new THREE.WebGLRenderer({antialias: true, canvas, alpha: true});
        renderer.setSize(WIDTH, HEIGHT);
        document.body.appendChild(renderer.domElement);
    
        //ambient light
        //scene.add(new THREE.AmbientLight(0xaaaaaa));
        scene.add(new THREE.AmbientLight(0x222222));

        //sunlight?
        light = new THREE.PointLight(0xffffff, 1, 0);
        light.position.set(0, 0, 0);
        scene.add(light);
    
    
        //the sun
        //SphereGeometry(size of sphere, higher the numeber the smoother the sphere and more processing)
	THREE.ImageUtils.crossOrigin = '';  
        material = new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture('static/img/sun.jpg'),
            side: THREE.DoubleSide
        });
        theSun = new THREE.Mesh(new THREE.SphereGeometry(250, 35, 35 ), material);
        scene.add(theSun);
    
    
        //mercury
        material = new THREE.MeshLambertMaterial({
            map: THREE.ImageUtils.loadTexture('static/img/mercury.jpg'),
            shading: THREE.SmoothShading
        });
        mercury = new THREE.Mesh(new THREE.SphereGeometry(mercurySize, 15, 15), material);
        scene.add(mercury);
    
    
        //venus
        material = new THREE.MeshLambertMaterial({
            map: THREE.ImageUtils.loadTexture('static/img/venus.jpg'),
            shading: THREE.SmoothShading
        });
        venus = new THREE.Mesh(new THREE.SphereGeometry(venusSize, 15, 15), material);
        scene.add(venus);
    
    
        //earth
        material = new THREE.MeshLambertMaterial({
            map: THREE.ImageUtils.loadTexture('static/img/earth.jpg'),
            shading: THREE.SmoothShading
        });
        earth = new THREE.Mesh(new THREE.SphereGeometry(earthSize, 15, 15), material);
        scene.add(earth);
    
    
        //mars
        material = new THREE.MeshLambertMaterial({
            map: THREE.ImageUtils.loadTexture('static/img/mars.jpg'),
            shading: THREE.SmoothShading
        });
        mars = new THREE.Mesh( new THREE.SphereGeometry(marsSize, 15, 15), material);
        scene.add(mars);


        
        //jupiter
        material = new THREE.MeshLambertMaterial({
            map: THREE.ImageUtils.loadTexture('static/img/jupiter.jpg'),
            shading: THREE.SmoothShading
        });
        jupiter = new THREE.Mesh( new THREE.SphereGeometry(jupiterSize, 25, 25), material);
        scene.add(jupiter);
    
    
        //saturn
        material = new THREE.MeshLambertMaterial({
            map: THREE.ImageUtils.loadTexture('static/img/saturn.jpg'),
            shading: THREE.SmoothShading
        });
        saturn = new THREE.Mesh( new THREE.SphereGeometry(saturnSize, 25, 25), material);
        scene.add(saturn);
        //saturns rings
        material = new THREE.MeshLambertMaterial({
            map: THREE.ImageUtils.loadTexture('static/img/saturn-ring.jpg'),
            shading: THREE.SmoothShading,
            side: THREE.DoubleSide
        });
        saturnRing = new THREE.Mesh( new THREE.RingGeometry(saturnRingStart, saturnRingEnd, 30), material);
        saturn.add(saturnRing);
        saturnRing.rotation.x = 90 * Math.PI / 180;

    
    
        //Уран
        material = new THREE.MeshLambertMaterial({
            map: THREE.ImageUtils.loadTexture('static/img/uranus.jpg'),
            shading: THREE.SmoothShading
        });
        uranus = new THREE.Mesh( new THREE.SphereGeometry(uranusSize, 20, 20), material);
        theSun.add(uranus);
        //Кольца Урана
        material = new THREE.MeshLambertMaterial({
            map: THREE.ImageUtils.loadTexture('static/img/uranus-ring.png'),
            shading: THREE.SmoothShading,
            side: THREE.DoubleSide,
            transparent: true
        });
        uranusRing = new THREE.Mesh( new THREE.RingGeometry(uranusRingStart, uranusRingEnd, 30), material);
        uranus.add(uranusRing);
        
        //Позиция Урана
        var radians = 0 * Math.PI / 180;
        uranus.position.x = Math.cos(radians) * uranusOrbitRadius;
        uranus.position.z = Math.sin(radians) * uranusOrbitRadius;
        uranusRing.rotation.x = 90 * Math.PI / 180;
        uranus.rotation.z = 90 * Math.PI / 180;
    
    
        //neptune
        material = new THREE.MeshLambertMaterial({
            map: THREE.ImageUtils.loadTexture('static/img/neptune.jpg'),
            shading: THREE.SmoothShading
        });
        neptune = new THREE.Mesh( new THREE.SphereGeometry(neptuneSize, 20, 20), material);
        scene.add(neptune);
        
        
                // настраиваем управление камерой
        var controls = new THREE.OrbitControls( camera);
    controls.target.set(0, 0, 0);
    
    controls.rotateSpeed = 0.5;
    controls.update();
    controls.addEventListener('change', render);
        window.addEventListener('resize', onWindowResize, false);
        
        var gui = new dat.GUI();
        
        gui.add(options, 'back');
        
    }
    
    

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerWidth;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerWidth );
    }

    function animate() {
        requestAnimationFrame(animate);
        
        render();
    }

    
    function render() {
    
        theSun.rotation.y += 0.001;

        uranus.rotation.x -= uranusRotateSpeed;
        
        //run mercury's orbit around the Sun
        mercuryOrbitAngle -= mercuryOrbitSpeed;
        var radians = mercuryOrbitAngle * Math.PI / 180;
        mercury.position.x = Math.cos(radians) * mercuryOrbitRadius;
        mercury.position.z = Math.sin(radians) * mercuryOrbitRadius;
        mercury.rotation.y += mercuryRotateSpeed;
        
        
        //run venus's orbit around the Sun
        venusOrbitAngle -= venusOrbitSpeed;
        var radians = venusOrbitAngle * Math.PI / 180;
        venus.position.x = Math.cos(radians) * venusOrbitRadius;
        venus.position.z = Math.sin(radians) * venusOrbitRadius;
        venus.rotation.y -= venusRotateSpeed;
        
        
        //run earth's orbit around the Sun
        earthOrbitAngle -= earthOrbitSpeed;
        var radians = earthOrbitAngle * Math.PI / 180;
        earth.position.x = Math.cos(radians) * earthOrbitRadius;
        earth.position.z = Math.sin(radians) * earthOrbitRadius;
        earth.rotation.y += earthRotateSpeed;
        
        //run mars's orbit around the Sun
        marsOrbitAngle -= marsOrbitSpeed;
        var radians = marsOrbitAngle * Math.PI / 180;
        mars.position.x = Math.cos(radians) * marsOrbitRadius;
        mars.position.z = Math.sin(radians) * marsOrbitRadius;
        mars.rotation.y += marsRotateSpeed;
        
        
        //run jupiter's orbit around the Sun
        jupiterOrbitAngle -= jupiterOrbitSpeed;
        var radians = jupiterOrbitAngle * Math.PI / 180;
        jupiter.position.x = Math.cos(radians) * jupiterOrbitRadius;
        jupiter.position.z = Math.sin(radians) * jupiterOrbitRadius;
        jupiter.rotation.y += jupiterRotateSpeed;
        
        
        //run saturn's orbit around the Sun
        saturnOrbitAngle -= saturnOrbitSpeed;
        var radians = saturnOrbitAngle * Math.PI / 180;
        saturn.position.x = Math.cos(radians) * saturnOrbitRadius;
        saturn.position.z = Math.sin(radians) * saturnOrbitRadius;
        saturn.rotation.y += saturnRotateSpeed;
        
        
        //Движение Нептуна
        neptuneOrbitAngle -= neptuneOrbitSpeed;
        var radians = neptuneOrbitAngle * Math.PI / 180;
        neptune.position.x = Math.cos(radians) * neptuneOrbitRadius;
        neptune.position.z = Math.sin(radians) * neptuneOrbitRadius;
        neptune.rotation.y += neptuneRotateSpeed;
        
        
        
        renderer.render( scene, camera );
        
        
        
    }

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
    
    
}).call(this);
