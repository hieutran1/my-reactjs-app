let router = (
  <Router history={ history }>
    <Route path="/insurance" component={Pages.InsurancePage} />
    <Route path="/cosmetology" component={Pages.CosmetologyPage} />
    <Route path="/service-list" component={Pages.ServiceListPage} />
    <Route path="/pay" component={Pages.PayPage} />
    <Route path="/order-status" component={Pages.OrderStatusPage} />
    <Route path="/address-list" component={Pages.AddressListPage} />
    <Route path="/maintenance" component={Pages.MaintenancePage}>
      <Route path="car-exchange" component={Pages.CarExchangePage} />
    </Route>
    <Route path="/orders" component={Pages.OrdersPage}>
      <Route path="order-details" component={Pages.OrderDetailsPage} >
        <Route path="order-evaluation" component={Pages.orderevaluationPage} />
      </Route>
    </Route>
    <Route path="/packages" component={Pages.PackagesPage} />
    <Route path="/register" component={Pages.RegisterPage}>
      <Route path="register-done" component={Pages.RegisterDonePage} />
    </Route>
    <Route path="/sign" component={Pages.SignPage} />
    <Route path="/single-wash" component={Pages.SingleWashPage} />
    <Route path="/user-center" component={Pages.UserCenterPage}>
      <Route path="car-exchange" component={Pages.CarExchangePage} />
      <Route path="renewal-fee" component={Pages.RenewalFeePage} />
    </Route>
  </Router>
);

React.render(router, document.body);