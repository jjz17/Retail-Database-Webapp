package com.example.springtemplate;

public enum Role {
  CUSTOMER("customer"), EMPLOYEE("employee"), MANAGER("manager");

  private final String role;

  Role(String role) {
    this.role = role;
  }

  @Override
  public String toString() {
    return this.role;
  }
}
