import { Button, Input } from "antd";
import React, { useEffect, useState } from "react";
import { CheckOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { MAIN_API_URL } from "../../utils/api";

const Todo = ({ mini }) => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [addedToBackend, setAddedToBackend] = useState(false);

  const addTodo = async () => {
    const res = await fetch(MAIN_API_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: inputValue }),
    });
    const datas = await res.json();

    setAddedToBackend(!addedToBackend);
  };

  useEffect(() => {
    const fetcher = async () => {
      try {
        const res = await fetch(MAIN_API_URL);
        const datas = await res.json();
        setData(datas);
      } catch (error) {
        console.log(error);
      }
    };

    fetcher();
  }, [addedToBackend]);

  const actionTodo = (type, id) => {
    if (type === "delete") {
      const fetcher = async () => {
        try {
          const res = await fetch(MAIN_API_URL + `/${id}`, {
            method: "DELETE",
          });
          const datas = await res.json();
          setData(datas);
        } catch (error) {
          console.log(error);
        }
      };

      fetcher();
    }
  };
  return (
    <div
      className="home-wrapper d-flex align-items-center justify-content-center flex-column"
      style={{ marginLeft: `${!mini ? "80px" : "262px"}` }}
    >
      <form className="d-flex flex-column gap-2 w-full">
        <Input
          placeholder="Basic usage"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button type="primary" onClick={addTodo}>
          Add todo
        </Button>
      </form>

      {data.length > 0
        ? data?.map((value, index) => (
            <Card
              key={index}
              style={{
                width: 300,
              }}
              actions={[
                <CheckOutlined
                  onClick={() => actionTodo("check")}
                  key="setting"
                />,
                <EditOutlined onClick={() => actionTodo("edit")} key="edit" />,
                <DeleteOutlined
                  onClick={() => actionTodo("delete", value.id)}
                  key="ellipsis"
                />,
              ]}
            >
              {value.title}
            </Card>
          ))
        : "No todos"}
    </div>
  );
};

export default Todo;
