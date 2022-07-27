package todo

import (
	"bytes"
	"encoding/json"
	//"fmt"
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestCreateTodo(t *testing.T) {
	var s Server
	newtodo := todos{
		ID:   40,
		Task: "task40",
	}
	s.InitializeDB()
	value, _ := json.Marshal(newtodo)

	t.Run("create new todo list ", func(t *testing.T) {
		request, _ := http.NewRequest(http.MethodPost, "/todo", bytes.NewBuffer(value))
		response := httptest.NewRecorder()
		s.CreateTodo(response, request)
		assertStatus(t, response.Code, http.StatusOK)

	})
}
func TestGetTodo(t *testing.T) {
	var s Server
	s.InitializeDB()
	newtodo := todos{
		ID:   3,
		Task: "task3",
	}
	value, _ := json.Marshal(newtodo)

	t.Run("Get all todo tasks", func(t *testing.T) {
		request, _ := http.NewRequest(http.MethodPost, "/todo", bytes.NewBuffer(value))
		response := httptest.NewRecorder()
		s.Gettodo(response, request)
		assertStatus(t, response.Code, http.StatusOK)
	})
}
func TestGetTodoById(t *testing.T) {
	var s Server
	s.InitializeDB()
	newtodo := todos{
		ID:   20,
		Task: "task20",
	}
	value, _ := json.Marshal(newtodo)

	t.Run("Get todo tasks by id", func(t *testing.T) {
		request, _ := http.NewRequest(http.MethodPost, "/todo/20", bytes.NewBuffer(value))
		response := httptest.NewRecorder()
		s.Gettodobyid(response, request)
		assertStatus(t, response.Code, http.StatusOK)
	})
}
func TestUpdateTodob(t *testing.T) {
	var s Server
	newtodo := todos{
		ID:   12,
		Task: "task",
	}
	s.InitializeDB()
	value, _ := json.Marshal(newtodo)

	t.Run("Get todo tasks by id", func(t *testing.T) {
		request, _ := http.NewRequest(http.MethodPost, "/todo/12", bytes.NewBuffer(value))
		response := httptest.NewRecorder()
		s.UpadateTodo(response, request)
		assertStatus(t, response.Code, http.StatusOK)
	})
}
func TestDeleteTodob(t *testing.T) {
	var s Server
	newtodo := todos{
		ID:   12,
		Task: "task",
	}
	s.InitializeDB()
	value, _ := json.Marshal(newtodo)

	t.Run("Get toto tasks by id", func(t *testing.T) {
		request, _ := http.NewRequest(http.MethodPost, "/todo/12", bytes.NewBuffer(value))
		response := httptest.NewRecorder()
		s.DeleteTodo(response, request)
		assertStatus(t, response.Code, http.StatusAccepted)
	})
}

func assertStatus(t testing.TB, got, want int) {
	t.Helper()
	if got != want {
		t.Errorf("did not get correct status, got %d, want %d", got, want)
	}
}