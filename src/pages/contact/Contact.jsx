import React from 'react';
import { H1, H1D } from '../about/About'
import { Submit, CopyRight, Form, Input, TextArea, Wrapper, Container, Footer, GoWrap, Go, ContactList, Item, Link } from './Contact'
import { FaGithub, FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault()
    e.target.reset()
  }

  return (
    <Wrapper id='contact'>
      <Container>
        <H1D>
          <H1>
            CONTACT
          </H1>
        </H1D>
        <p className={'subparagraph'}>
          Have a question or want to work together?
        </p>
        <Form onSubmit={sendEmail}>
          <Input
            type='text'
            placeholder='Name'
            name='user_name'
            required
          />
          <Input
            type={"email"}
            placeholder='Your Email'
            name='user_email'
            required
          />
          <TextArea
            placeholder='Your Message'
            name='message'
            required
          />
          <Submit
            type={'submit'}
            style={{}}
            value='SUBMIT'
          />
        </Form>

        <Footer>
          <GoWrap
            to='home'
            spy={true}
            smooth={true}
            offset={-50}
            duration={350}
            exact='true'
          >
            <Go />
          </GoWrap>
          <ContactList>
            <Item>
              <Link href='https://www.facebook.com/omar.elgablaye'><FaFacebookF /></Link>
            </Item>
            <Item>
              <Link href='https://www.instagram.com/0mar_sa1ah/'><FaInstagram /> </Link>
            </Item>
            <Item>
              <Link href='https://www.linkedin.com/feed/'><FaLinkedinIn /></Link>
            </Item>
            <Item>
              <Link href='https://twitter.com/Omar_salah70'><FaTwitter /></Link>
            </Item>
            <Item>
              <Link href='https://github.com/OmarSalah1911'><FaGithub /></Link>
            </Item>
          </ContactList>
          <CopyRight>
            OMAR SALAH <span>© {new Date().getFullYear()}</span>
          </CopyRight>
        </Footer>
      </Container>
    </Wrapper>
  )
}

export default Contact