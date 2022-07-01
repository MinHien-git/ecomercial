import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import authSelector from "../../../store/selectors/authSelector";
import SecondaryText from "../../secondary-text";
import Title from "../../section-title";
import "./body.css";

const ProfilePage = () => {
  return (
    <>
      <main className="primary-body grid center">
        <section className="grid center">
          <SecondaryText text="You're Logged In As a Guess" />
          <Title title="Go Shopping Now" />
          <Link
            className="btn primary-bg fs-300 width-btn flex"
            to="/product"
            style={{ maxWidth: "15rem" }}
          >
            <strong className="center">Explore Products</strong>
          </Link>
        </section>
      </main>
    </>
  );
};

export default ProfilePage;
