import { Layout } from 'antd';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import {BreadCrumb, Header, Lnb, Footer} from './Layout'

import Login from "../containers/Auth/Login";
import UserList from "../containers/Users/UserList";
import UserDetail from "../containers/Users/UserDetail";
import {useLoggedIn} from "../hooks/useLoggedIn";

const { Content } = Layout;

function App() {
  const {loggedIn} = useLoggedIn();

  if(!loggedIn) {
    return <Login />
  }
  return (
    <Router>
    <Layout>
      <Header />
      <Layout>
        <Lnb />
        <ContentLayout>
          <BreadCrumb />
          <Content className={'content'}>
            <Switch>
              <Route path="/users/:userId" component={UserDetail} />
              <Route path="/users" component={UserList} />
            </Switch>
          </Content>
        </ContentLayout>
      </Layout>
      <Footer />
    </Layout>
    </Router>
  );
}

const ContentLayout = styled(Content)`
  background:#fff;
  min-height: calc(100vh - 134px);
  display: flex;
  flex-direction: column;
  
  .content {
    flex: 1;
    padding: 10px;
  }
`;

export default App;
