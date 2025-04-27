import Form from '../cs/contact/form1c'
import S1 from '../cs/contact/slidec'

function Page() {
    return (
        <div className="bg-white text-black">
            <S1/>
            <Form/>
            <div className="w-full flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d253801.7637399387!2d80.41881!3d6.309294!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1602fd2997c47%3A0x5cc13ccd7f742955!2sLiyonta%20tea%20factory!5e0!3m2!1sen!2sus!4v1745654326227!5m2!1sen!2sus"
              width="1200"
              height="500"
              className="border-0 rounded-lg shadow-lg w-full max-w-[1000px] h-[300px] mb-10"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
        </div>
    );
}

export default Page;
