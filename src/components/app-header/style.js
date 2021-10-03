import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background-color: white;
  height: 45px;
  .header {
    width: 980px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .nav-bar {
      display: flex;
      justify-content: space-between;
      min-width: 450px;
      .logo {
        display: flex;
        align-items: center;
        
        img {
          width: 120px;
        }
      }

      .tab-control {
        display: flex;
        justify-content: space-between;
        line-height: 45px;
        font-size: 17px;
        min-width: 300px;
        .item {
          
          a {
            color: black;
            i {
              padding-right: 5px;
              font-size: 18px;
            }
          }
          a.active,
          a.active i {
            color: #fc5531;
          }
        }
      }
    }

    .main-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-width: 430px;
      .search {
        
        .search_btn {
          border-radius: 20px;
        }
      }
      .write {
        
      }
      .user{
        display: flex;

        .login_btn{
          padding-right: 20px;
        }
      }
    }
  }
`;
