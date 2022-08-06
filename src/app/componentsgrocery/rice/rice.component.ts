import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rice',
  templateUrl: './rice.component.html',
  styleUrls: ['./rice.component.css']
})
export class RiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items=[
    {
    title:"Daawat Pulav Basmati Rice (Long Grain)",
      description:"Daawat Sehat Mini Mogra Basmati Rice 5 kg",
      offers:"Upto 5% off",
      img:"https://images-na.ssl-images-amazon.com/images/I/91W7guuUrgL.jpg"
  },
  {
    title:"Fortune Everyday Basmati Rice (Long Grain)  (1 kg)",
      description:"Fortune Everyday basmati rice is a fine variety of basmati that you can relish every day. Specially aged to help every grain of basmati become long and fluffy. On cooking, the grains do not stick together and become flavorsome.",
      offers:"Upto 5% off",
      img:"https://www.gffoodservice.com.au/content/uploads/2021/05/Fortune_171912_Everyday-Jasmine-20kg_Website-Ready.png"
  },
  {
    title:"Nirapara White Rice... ",
      description:"Nirapara White Rice basmati rice is a fine variety of basmati that you can relish every day.",
      offers:"Upto 4% off",
      img:"https://www.luluhypermarket.com/medias/160671-01.jpg-515Wx515H?context=bWFzdGVyfGltYWdlc3w5NTAwOXxpbWFnZS9qcGVnfGltYWdlcy9oZGMvaGFiLzkwNzkxNjAwNzgzNjYuanBnfGNmMzUwM2U2NDA1YjNlMDkwYWRkNDRhYjU4MWYwZmRlZThmNTk3Y2UxY2UzYzI5NzExMjdiMTdiY2U0MzU4ZmE"
  },
  {
    title:"INDIA GATE Dubar Basmati Rice  (1 kg)",
      description:"India Gate Dubar Basmati Rice gives you the traditional taste of India. It embodies all the characteristics of true basmati rice.",
      offers:"Upto 25% off",
      img:"https://rukminim1.flixcart.com/image/832/832/klscivk0/rice/x/4/i/white-dubar-basmati-rice-pouch-india-gate-original-imagytzcwp55gwfk.jpeg?q=70"
  },
  {
    title:"Devaaya Everyday Basmati Rice (Broken Grain, Raw)  (5 kg)",
      description:"Devaaya Everyday Basmati Rice (Broken Grain, Raw)  (5 kg)",
      offers:"Upto 25% off",
      img:"https://rukminim1.flixcart.com/image/832/832/kz5vwy80/rice/f/k/i/-original-imagb8n6c9f2khs5.jpeg?q=70"
  },
  // {
  //   title:"",
  //     description:"",
  //     offers:"",
  //     img:""
  // },
  
]

}
