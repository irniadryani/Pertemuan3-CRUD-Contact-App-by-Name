
// npm module yargs
const yargs = require("yargs");

// memanggil module dari contact.js
const contacts = require ('./contact')

// console.log(yargs.argv);

yargs.command({
  // tambah data contact
  command: 'add',
  describe: 'Membuat Kontak Baru',
  builder: {
    name: {
      describe: 'Contact Name',
      demandOption: true,
      type: 'string',
    },
    // data nomor telepon
    phoneNumber: {
      describe: 'Contact Phone Number',
      demandOption: true,
      type: 'string',
    },
    // data email
    email: {
      describe: 'Contact Email',
      demandOption: false,
      type: 'string',
    },
  },
  handler(argv) {
    // const contact = {
    //   name: argv.name,
    //   phoneNumber: argv.phoneNumber,
    //   email: argv.email,
    // };

    // memanggil fungsi untuk menyimpan contact yang sudah diinput
    contacts.createContact(argv.name, argv.phoneNumber, argv.email)

    // melihat content dari contact
    // console.log(contact);
  },
});

// menunjukkan list contact
yargs.command({
  command: 'list',
  describe: 'Melihat Daftar Kontak',
  handler() {
    contacts.listContact();
  },
});

// melihat detail contact dari sebuah contact
yargs.command({
  command: 'detail',
  describe: `Melihat Detail Kontak Berdasarkan Nama`,
  builder: {
    name: {
      describe: 'Contact Name',
      demandOption: true,
      type: 'string',
    }
  },
  handler(argv) {
    contacts.detailContact(argv.name, argv.phoneNumber, argv.email);
  }
}) 

// menghapus sebuah contact
yargs.command({
  command: 'delete',
  describe: `Hapus Kontak Berdasarkan Nama`,
  builder: {
    name: {
      describe: 'Contact Name',
      demandOption: true,
      type: 'string',
    }
  },
  handler(argv) {
    contacts.deleteContact(argv.name);
  }
});

// mengedit sebuah contact
yargs.command({
  command: 'update',
  describe: `Update Kontak Berdasarkan Nama`,
  builder: {
    name: {
      describe: 'Contact Name',
      demandOption: true,
      type: 'string',
    },
    newName: {
      describe: 'Contact New Name',
      demandOption: false,
      type: 'string',
    },
    phoneNumber: {
      describe: 'Contact Phone Number',
      demandOption: false,
      type: 'string',
    },
    email: {
      describe: 'Contact Email',
      demandOption: false,
      type: 'string',
    }
  },
  handler(argv) {
    contacts.updateContact(argv.name, argv.newName, argv.phoneNumber, argv.email);
  }
});

// memanggil yargs
yargs.parse();

// membuat fungsi untuk menampung pertanyaan
// const getQuestion = async () => {
//   const name = await contacts.questions (`What's your name ? `);
//   const phoneNumber = await contacts.questions ('Input your phone number : ');
//   const email = await contacts.questions ('Input your email : ');

//   contacts.createContact(name, phoneNumber, email);
// }

// getQuestion();